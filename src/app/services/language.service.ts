import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  setLanguage(lang: string) {
    console.log('Language updated to:', lang); // تحقق من وصول القيمة الجديدة
    this.languageSubject.next(lang);
  }
}
