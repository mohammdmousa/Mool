import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hidden-header',
  templateUrl: './hidden-header.component.html',
  styleUrl: './hidden-header.component.css',
})
export class HiddenHeaderComponent {
  currentLang: string = '';
  constructor (private languageService: LanguageService) {
      this.languageService.currentLanguage$.subscribe((lang) => {
        this.currentLang = lang;
      });
  }
  closeOffcanvas() {
    const offcanvas = document.getElementById('fixedHeader');
    const offcanvasBackdrops =
      document.getElementsByClassName('offcanvas-backdrop');
    if (offcanvas) {
      offcanvas.classList.remove('show'); // Remove the class that shows the offcanvas
      while (offcanvasBackdrops.length > 0) {
        offcanvasBackdrops[0].classList.remove('show'); // إزالة صنف العرض
        offcanvasBackdrops[0].remove(); // حذف العنصر من DOM
      }
    }
  }
}
