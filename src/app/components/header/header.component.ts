import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentLang: string = 'en'; // Default language

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: string) {
    // Update TranslateService
    this.translate.use(lang);
    this.currentLang = this.translate.currentLang || 'en';

    // Update document direction and language attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Notify other components about the language change
    this.languageService.setLanguage(lang);
  }
  toggleLanguage() {
    // Toggle language
    const newLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    this.languageService.setLanguage(newLang);

    this.currentLang = newLang;

    // Update document direction and language attributes
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  }
}
