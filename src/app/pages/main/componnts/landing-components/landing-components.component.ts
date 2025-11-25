// landing-components.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Slide } from '../../interface/interface';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-landing-components',
  imports: [CarouselModule, ButtonModule, CommonModule],
  templateUrl: './landing-components.component.html',
  styleUrl: './landing-components.component.scss',
})
export class LandingComponentsComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  slides = signal<Slide[]>([
    {
      title: {
        ar: 'نتائج تُحدث الفرق',
        en: 'Results That Make a Difference',
      },
      subtitle: {
        ar: 'نقيس نجاحنا من خلال نتائج عملائنا، وهدفنا تحقيق العدالة التي تستحقها بثقة واحترافية.',
        en: 'We measure our success through our clients’ outcomes — our goal is achieving the justice and results you truly deserve.',
      },
      button: {
        ar: 'احجز استشارتك الآن',
        en: 'Book Your Consultation',
      },
    },
    {
      title: {
        ar: 'استقلاليتنا تصنع الفارق',
        en: 'Our Independence Makes the Difference',
      },
      subtitle: {
        ar: 'نؤمن بأن الاستقلالية تمنحنا القوة لتقديم حلول قانونية نزيهة وعادلة تخدم مصلحة عملائنا في كل خطوة.',
        en: 'We believe that true independence empowers us to deliver fair and transparent legal solutions that serve our clients’ best interests.',
      },
      button: {
        ar: 'استشارة مجانية',
        en: 'Free Consultation',
      },
    },
    {
      title: {
        ar: 'خبرة يمكنك الوثوق بها',
        en: 'Expertise You Can Trust',
      },
      subtitle: {
        ar: 'فريقنا من الخبراء القانونيين ملتزم بحماية حقوقك وتقديم المشورة الدقيقة لضمان نجاحك في كل قضية.',
        en: 'Our team of experienced legal professionals is dedicated to protecting your rights and providing precise advice for every case.',
      },
      button: {
        ar: 'اعرف المزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: 'خصوصية بياناتك أولويتنا',
        en: 'Your Data Privacy Is Our Priority',
      },
      subtitle: {
        ar: 'نحرص دائمًا على حماية حقوق العملاء وتقديم ما يخدم مصالحهم بأعلى مستويات الأمان والسرية.',
        en: 'We always ensure the protection of our clients’ rights and provide services that prioritize their interests with the highest levels of security and confidentiality.',
      },
      button: {
        ar: 'اكتشف المزيد',
        en: 'Discover More',
      },
    },
  ]);

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
