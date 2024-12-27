import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  // Method to update the language
  setLanguage(lang: string) {
    this.languageSubject.next(lang);
  }
}
