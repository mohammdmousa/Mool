import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  currentLang: string = '';
  constructor(private languageService: LanguageService) {}
  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currentLang = res;
      },
    });
  }
}
