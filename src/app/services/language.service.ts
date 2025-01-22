import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private savedLanguage: string;
  private languageSubject: BehaviorSubject<string>;
  currentLanguage$;

  constructor(private translate: TranslateService) {
    // تحقق إذا كان يتم تنفيذ الكود في المتصفح
    if (typeof window !== 'undefined') {
      this.savedLanguage = window.localStorage.getItem('language') || 'en';
    } else {
      this.savedLanguage = 'en'; // قيمة افتراضية إذا كان الكود يعمل على الخادم
    }

    this.languageSubject = new BehaviorSubject<string>(this.savedLanguage);
    this.currentLanguage$ = this.languageSubject.asObservable();
    this.translate.use(this.savedLanguage);
    this.initializeLanguage();
  }

  private initializeLanguage() {
    // تطبيق اللغة المحفوظة
    this.setLanguage(this.savedLanguage);
  }
  setLanguage(lang: string) {
    console.log('Language updated to:', lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang);
    }
    this.languageSubject.next(lang);
    this.translate.use(lang);
    this.updateDirection(lang);
  }
  private updateDirection(lang: string) {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      const body = document.body;

      if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.add('bodyrtl'); // إضافة class لتفعيل CSS RTL
        body.classList.remove('bodyltr'); // إزالة أي class قديم
      } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
        body.classList.add('bodyltr'); // إضافة class لتفعيل CSS LTR
        body.classList.remove('bodyrtl'); // إزالة أي class قديم
      }
    }
  }
}
