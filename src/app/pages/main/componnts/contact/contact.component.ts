import { Component, inject, signal } from '@angular/core';
import { ContactInfo } from '../../interface/interface';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-contact',
  imports: [NgIf, NgFor, TranslatePipe, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  contactInfo = signal<ContactInfo[]>([
    {
      icon: 'fa-regular fa-clock',
      text: {
        ar: '	 متاحون لخدمتكم 24/7 طوال أيام الأسبوع',
        en: 'Available 24/7 — Every Day of the Week',
      },
      link: null,
    },
    {
      icon: 'fa-solid fa-mobile-button',
      text: {
        ar: '966556832222+',
        en: '+966556832222',
      },
      link: 'tel:+966556832222',
    },
    {
      icon: 'fa-solid fa-envelope',
      text: {
        ar: 'suleman@almughem.sa',
        en: 'suleman@almughem.sa',
      },
      link: 'mailto:suleman@almughem.sa',
    },
    {
      icon: 'fa-solid fa-location-dot',
      text: {
        ar: 'طريق الأمير سعد بن عبدالرحمن الأول الفرعي، حي الروابي، الرياض 14215',
        en: 'Prince Saad Bin Abdulrahman Al Awwal Branch Rd, Ar Rawabi, Riyadh 14215',
      },
      link: 'https://maps.app.goo.gl/H3bXb7k1ZMZWv1jq7',
    },
  ]);
  openWhatsApp = openWhatsApp;
  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
