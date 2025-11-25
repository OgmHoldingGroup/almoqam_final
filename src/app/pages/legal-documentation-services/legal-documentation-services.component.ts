import { Component, inject, signal } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { openWhatsApp } from '../../shared/funcations/whatapp';
import { FormsModule, NgModel } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { email, phoneNumEn } from '../../shared/data/data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-legal-documentation-services',
  imports: [NgClass, MainHeaderComponent, FormsModule],
  templateUrl: './legal-documentation-services.component.html',
  styleUrl: './legal-documentation-services.component.scss',
})
export class LegalDocumentationServicesComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  isHuman = false;
  openWhatsApp = openWhatsApp;
  email = email;
  phoneNum = phoneNumEn;

  // إضافة computed signal للحصول على الترجمة الحالية
  get currentTranslation() {
    return this.currentLang() === 'ar'
      ? this.translation.ar
      : this.translation.en;
  }

  servicesList = signal<{ ar: string; en: string }[]>([
    {
      ar: 'قسمة التركات',
      en: 'Estate Division',
    },
    {
      ar: 'التقاضي وتسوية المنازعات',
      en: 'Litigation and Dispute Resolution',
    },
    {
      ar: 'خدمات التوثيق القانونية',
      en: 'Legal Documentation Services',
    },
    {
      ar: 'إدارة الشؤون القانونية للشركات',
      en: 'Corporate Legal Management',
    },
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
    {
      ar: 'خدماتنا في القطاع الطبي',
      en: 'Our Services in the Medical Sector',
    },
    {
      ar: 'الخدمات القانونية في القطاع العقاري',
      en: 'Legal Services in the Real Estate Sector',
    },
  ]);

  translation = {
    ar: {
      title: 'خدمات التوثيق القانونية',
      contactUs: 'تواصل معنا',
      ourServices: 'خدماتنا',
      namePlaceholder: 'الاسم',
      phonePlaceholder: 'رقم الجوال',
      introText:
        'يُعد التوثيق ركنًا أساسيًا في النظام القانوني، حيث يساهم في حفظ حقوق الأفراد والشركات ومعاملاتهم المختلفة. من خلال التوثيق الفعّال يتم تعزيز الثقة بين الأطراف وتحقيق سلامة المعاملات، مما يقلل من المخاطر القانونية المحتملة. في مكتب المقحم للمحاماة نوفر خدمات توثيق دقيقة واحترافية تضمن الامتثال التام للأنظمة المحلية والدولية.',
      mainHeading: 'خدماتنا في مجال التوثيق:',
      subHeading: 'يشمل نطاق عملنا في التوثيق الخدمات التالية:',
      services: [
        {
          title: 'إعداد الوكالات والإقرارات:',
          description:
            'صياغة وتوثيق الوكالات العامة والخاصة بما يضمن سلامة الإجراءات.',
        },
        {
          title: 'توثيق عقود الشركات وقرارات الشركاء:',
          description:
            'اعتماد رسمي لعقود التأسيس والتعديلات الخاصة بها لتحقيق الحفظ القانوني.',
        },
        {
          title: 'الإفراغات والرهون العقارية:',
          description:
            'إنهاء إجراءات التوثيق المتعلقة بالعقارات بشكل قانوني آمن.',
        },
        {
          title: 'التسجيل العيني للعقارات:',
          description:
            'توثيق الحيازات العقارية وفقًا للأنظمة المطبقة في المملكة.',
        },
        {
          title: 'توثيق المعاوضات:',
          description:
            'ضمان قانونية التبرعات العامة وحفظ حقوق الدائنين والمدينين.',
        },
        {
          title: 'توثيق مختلف العقود والمعاملات:',
          description:
            'تغطية جميع أنواع العقود لضمان صحتها القانونية وحمايتها من النزاعات.',
        },
      ],
      whyUsTitle: 'لماذا تختار المقحم للمحاماة في خدمات التوثيق؟',
      whyUsPoints: [
        'خبرة عميقة في إجراءات التوثيق بمختلف أنواعها.',
        'التزام كامل بالأنظمة السعودية والمتطلبات الدولية.',
        'دقة وسرعة في إنجاز المعاملات القانونية.',
      ],
      finalCtaTitle: 'اطلب استشارتك الآن',
      finalCtaDesc:
        'مع المقحم للمحاماة يمكنك إنجاز كافة معاملاتك التوثيقية بثقة واطمئنان، من خلال فريق قانوني متخصص يضمن لك الحماية القانونية الكاملة.',
      btnContact: 'تواصل معنا',
      firmName: 'المقحم للمحاماة',
    },
    en: {
      title: 'Legal Documentation Services',
      contactUs: 'Contact Us',
      ourServices: 'Our Services',
      namePlaceholder: 'Name',
      phonePlaceholder: 'Phone Number',
      introText:
        'Documentation is a fundamental pillar of the legal system, contributing to the protection of individuals and companies. Effective documentation builds trust between parties, ensures transaction safety, and minimizes legal risks. At Almoqham Law Firm, we provide precise and professional documentation services ensuring full compliance with local and international regulations.',
      mainHeading: 'Our Documentation Services:',
      subHeading: 'Our documentation scope includes the following:',
      services: [
        {
          title: 'Preparation of Powers of Attorney and Declarations:',
          description:
            'Drafting and notarizing general and special authorizations.',
        },
        {
          title: 'Documentation of Company Contracts and Partner Resolutions:',
          description:
            'Official authentication of establishment and amendment contracts.',
        },
        {
          title: 'Real Estate Transfers and Mortgages:',
          description:
            'Completing documentation procedures for properties securely.',
        },
        {
          title: 'Real Estate Registration:',
          description:
            'Documenting property ownerships in accordance with Saudi regulations.',
        },
        {
          title: 'Documentation of Exchanges:',
          description:
            "Ensuring the legality of donations and protecting creditors' and debtors' rights.",
        },
        {
          title: 'Documentation of Various Contracts and Transactions:',
          description:
            'Covering all contract types to ensure legal validity and protection.',
        },
      ],
      whyUsTitle: 'Why Choose Almoqham Law Firm for Documentation Services?',
      whyUsPoints: [
        'Extensive experience in all types of documentation procedures.',
        'Full compliance with Saudi and international regulations.',
        'Accuracy and speed in completing legal transactions.',
      ],
      finalCtaTitle: 'Request Your Consultation Now',
      finalCtaDesc:
        'With Almoqham Law Firm, you can confidently complete all your documentation transactions through a specialized legal team ensuring full legal protection.',
      btnContact: 'Contact Us',
      firmName: 'Almoqham Law Firm',
    },
  };
}
//ngmodel  is not support signal yet
