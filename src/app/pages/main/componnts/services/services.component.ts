import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Service } from '../../interface/interface';
import { RouterLink } from '@angular/router';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { LanguageService } from '../../../../shared/services/language.service';
@Component({
  selector: 'app-services',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private langService = inject(LanguageService);

  // اللغة الحالية
  currentLang = this.langService.currentLangSignal;

  // WhatsApp
  openWhatsApp = openWhatsApp;

  // Services
  services = signal<Service[]>([
    {
      title: {
        ar: 'خدمات الأفراد',
        en: 'Individual Services',
      },
      link: '/individual',
      description: {
        ar: 'نوفر خدمات قانونية متكاملة تشمل إصدار الوكالات وتمثيل العملاء في المرافعات، تقديم الاستشارات القانونية المستندة على الأنظمة والشرع، المساعدة في رفع الطلبات القضائية إلكترونياً، ودراسة القضايا والاعتراض على الأحكام والتماس إعادة النظر عند الضرورة.',
        en: 'We provide comprehensive legal services including issuing power of attorney, client representation in litigation, legal consultations based on regulations and Sharia, assistance in filing electronic judicial requests, case studies, objections to rulings, and requests for review when necessary.',
      },
      icon: 'fa-solid fa-user-tie',
      linkText: {
        ar: 'اكتشف المزيد',
        en: 'Discover More',
      },
    },
    {
      title: {
        ar: 'خدمات الشركات',
        en: 'Corporate Services',
      },
      link: '/company',
      description: {
        ar: 'عقد اتفاقيات استشارية سنوية، والقيام بالتوكيل بالمرافعة والمدافعة القضائية، وتقديم استشارات في مجال حوكمة الشركات، والمساعدة في تأسيس الشركات، وتقديم الاستشارات القانونية المستندة على الأنظمة والقوانين ذات الصلة، وصياغة وإعداد مختلف المحررات القانونية.',
        en: 'Annual consulting agreements, power of attorney for litigation and judicial defense, corporate governance consultations, company establishment assistance, legal consultations based on relevant regulations and laws, and drafting various legal documents.',
      },
      icon: 'fa-solid fa-building-columns',
      linkText: {
        ar: 'اكتشف المزيد',
        en: 'Discover More',
      },
    },
    {
      title: {
        ar: 'خدمات التوثيق',
        en: 'Notarization Services',
      },
      link: '/notary',
      description: {
        ar: 'نقل ملكية العقارات، إصدار الوكالات القانونية، توثيق عقود تأسيس الشركات، إعداد وتوثيق إقرارات الديون، إجراءات الرهن العقاري وفكه وتصحيحه، نهدف إلى تقديم الدعم القانوني الشامل.',
        en: 'Property ownership transfer, issuing legal power of attorney, notarization of company establishment contracts, preparation and notarization of debt acknowledgments, mortgage procedures including release and correction. We aim to provide comprehensive legal support.',
      },
      icon: 'fa-solid fa-file-signature',
      linkText: {
        ar: 'اكتشف المزيد',
        en: 'Discover More',
      },
    },
  ]);

  // دالة مساعدة للحصول على النص بناءً على اللغة الحالية
  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
