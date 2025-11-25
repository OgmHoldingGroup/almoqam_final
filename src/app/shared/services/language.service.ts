// src/app/shared/services/language.service.ts
import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  public currentLang$: Observable<string> =
    this.currentLangSubject.asObservable();

  // إضافة signal للغة الحالية
  public currentLangSignal = signal<string>('ar');

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    // Setup available languages
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');

    // Get saved language or use default
    const savedLang = localStorage.getItem('lang') || 'ar';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    // Update translation service
    this.translate.use(lang);

    // Save to localStorage
    localStorage.setItem('lang', lang);

    // Update current language
    this.currentLangSubject.next(lang);
    this.currentLangSignal.set(lang); // تحديث الـ signal

    // Set document direction
    this.setDirection(lang);
  }

  private setDirection(lang: string) {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = lang;
    document.body.setAttribute('dir', direction);
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  isRTL(): boolean {
    return this.getCurrentLang() === 'ar';
  }

  switchLanguage() {
    const newLang = this.getCurrentLang() === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }
}
