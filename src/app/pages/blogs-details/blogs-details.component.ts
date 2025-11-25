import { Component, inject, signal } from '@angular/core';
import { legalServicesTranslations } from '../legal-documentation-services/legalServicesTranslations ';
import { ActivatedRoute, Router } from '@angular/router';
import { openWhatsApp } from '../../shared/funcations/whatapp';
import { LanguageService } from '../../shared/services/language.service';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { email, phoneNumEn } from '../../shared/data/data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-blogs-details',
  imports: [NgClass, MainHeaderComponent],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.scss',
})
export class BlogsDetailsComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;
  openWhatsApp = openWhatsApp;
  email = email;
  phoneNum = phoneNumEn;
  allServices = legalServicesTranslations;
  currentService = signal<any>(null);

  servicesList = signal<{ ar: string; en: string }[]>([
    { ar: 'قسمة التركات', en: 'Estate Division' },
    { ar: 'التقاضي وتسوية المنازعات', en: 'Litigation and Dispute Resolution' },
    { ar: 'خدمات التوثيق القانونية', en: 'Legal Documentation Services' },
    { ar: 'إدارة الشؤون القانونية للشركات', en: 'Corporate Legal Management' },
    {
      ar: 'الخدمات القانونية في الأوقاف والوصايا',
      en: 'Legal Services in Endowments and Wills',
    },
    {
      ar: 'الخدمات القانونية في القطاع الصناعي',
      en: 'Legal Services in the Industrial Sector',
    },
    {
      ar: 'الخدمات القانونية لقطاع السفر والسياحة والفنادق',
      en: 'Legal Services for Travel, Tourism, and Hospitality',
    },
    { ar: 'خدماتنا في القطاع الطبي', en: 'Our Services in the Medical Sector' },
    {
      ar: 'الخدمات القانونية في القطاع العقاري',
      en: 'Legal Services in the Real Estate Sector',
    },
  ]);

  get currentTranslation() {
    const service = this.currentService();
    if (!service) return null;
    return this.currentLang() === 'ar' ? service.ar : service.en;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      const foundService = this.allServices.find((s) => s.slug === slug);

      if (foundService) {
        this.currentService.set(foundService);
      } else {
        // إذا لم يتم إيجاد الخدمة، ارجع للصفحة الرئيسية
        this.router.navigate(['/']);
      }
    });
  }

  navigateToService(slug: string) {
    this.router.navigate(['/blog', slug]);
  }
}
