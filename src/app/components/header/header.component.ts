import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentLang: string = ''; // Default language

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currentLang = res;
      },
    });
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = this.translate.currentLang || 'en';

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    this.languageService.setLanguage(lang);
  }
  toggleLanguage() {
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    this.languageService.setLanguage(newLang);

    this.currentLang = newLang;

    document.documentElement.lang = newLang;
    // document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  }
}
