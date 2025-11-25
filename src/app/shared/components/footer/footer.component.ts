import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { email, phoneNumAr, phoneNumEn } from '../../data/data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  langService = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);

  currentLang = this.langService.currentLangSignal;
  myEmail = email;
  phoneNumEn = phoneNumEn;
  phoneNumAr = phoneNumAr;

  // Google Maps data
  mapLink = 'https://maps.app.goo.gl/H3bXb7k1ZMZWv1jq7';
  mapEmbedUrl: SafeResourceUrl;

  // Newsletter email input
  email = '';

  // Current year for copyright
  currentYear = new Date().getFullYear();

  // Quick navigation links
  quickLinks = [
    { label: 'HEADER.HOME', route: '/' },
    {
      label: 'HEADER.CONSULT',
      route:
        'https://api.whatsapp.com/send/?phone=966556832222&text&type=phone_number&app_absent=0',
    },
    { label: 'HEADER.BLOG', route: '/blogs' },
    { label: 'HEADER.FAQ', route: '/FAQ' },
    { label: 'HEADER.CONTACT', route: '/contact' },
  ];

  // Main services list
  services = [
    { label: 'HEADER.COMPANY', route: '/company', icon: 'fa-chevron-left' },
    {
      label: 'HEADER.INDIVIDUAL',
      route: '/individual',
      icon: 'fa-chevron-left',
    },
    { label: 'HEADER.NOTARY', route: '/notary', icon: 'fa-chevron-left' },
  ];

  // Social media links
  socialMedia = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://www.facebook.com/Almughemlaw',
    },
    {
      name: 'TikTok',
      icon: 'fa-brands fa-tiktok',
      url: 'https://www.tiktok.com/@Almughemlaw',
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/Almughemlaw',
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/Almughemlaw',
    },
    {
      name: 'YouTube',
      icon: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com/@Almughemlaw',
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      url: 'https://www.linkedin.com/company/almughemlaw',
    },
  ];

  constructor(public languageService: LanguageService) {
    // Sanitize the Google Maps embed URL
    const embedUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2657750822336!2d46.79085062485387!3d24.683388878045292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f073a19feb433%3A0x1c8ef200b1595679!2z2LTYsdmD2Kkg2LPZhNmK2YXYp9mGINi12KfZhNitINin2YTZhdmC2K3ZhSDZhNmE2YXYrdin2YXYp9ipINmI2KfZhNin2LPYqti02KfYsdin2Kog2KfZhNmC2KfZhtmI2YbZitipINmI2KfZhNiq2YjYq9mK2YI!5e0!3m2!1sar!2ssa!4v1763723579661!5m2!1sar!2ssa';
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  /**
   * Handle newsletter subscription
   * Validates email and shows success/error message
   */
  subscribeNewsletter(): void {
    if (this.email && this.validateEmail(this.email)) {
      console.log('Subscribing email:', this.email);

      // TODO: Integrate with backend API for newsletter subscription
      alert('تم الاشتراك بنجاح في النشرة البريدية!');

      // Clear input after successful subscription
      this.email = '';
    } else {
      alert('الرجاء إدخال بريد إلكتروني صحيح');
    }
  }

  /**
   * Validate email format using regex
   * @param email - Email string to validate
   * @returns boolean - True if email is valid
   */
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
