import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  imports: [MainHeaderComponent, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit, OnDestroy {
  currentLang: string = 'ar';
  private langSubscription?: Subscription;

  faqs = [
    {
      question: {
        ar: 'متى يلزم توثيق العقد أو المعاملة؟',
        en: 'When is it required to notarize a contract or transaction?',
      },
      answers: {
        ar: [
          'يتم توثيق العقد عند وجود التزام مالي أو تعاقدي بين طرفين، أو عند تسجيل عقار، أو عند إصدار وكالة، أو عند وجود أي معاملة تتطلب حجية قانونية أمام الجهات الرسمية والمحاكم.',
        ],
        en: [
          'A contract must be notarized when there is a financial or contractual obligation between two parties, when registering a property, issuing a power of attorney, or for any transaction that requires legal validity before official authorities and courts.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'ما الفرق بين المحامي والمستشار القانوني؟',
        en: 'What is the difference between a lawyer and a legal consultant?',
      },
      answers: {
        ar: [
          'المحامي مرخص للمرافعة أمام المحاكم وتمثيل العملاء، بينما المستشار القانوني يقدم آراء قانونية وصياغة عقود دون تمثيل أمام القضاء. بعض القضايا تتطلب محامياً فقط.',
        ],
        en: [
          'A lawyer is licensed to represent clients and plead before courts, while a legal consultant provides legal opinions and drafts contracts without representing clients in court. Some cases require a lawyer specifically.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'كم تستغرق إجراءات التقاضي في السعودية؟',
        en: 'How long do legal proceedings take in Saudi Arabia?',
      },
      answers: {
        ar: [
          'تختلف مدة التقاضي حسب نوع الدعوى، والاختصاص، ونوع المستندات، واستجابة الأطراف. غالباً تتراوح بين شهرين إلى 12 شهراً، وقد تزيد في القضايا المعقدة.',
        ],
        en: [
          'The duration of litigation varies depending on the type of case, jurisdiction, documents, and parties’ responsiveness. It typically ranges from 2 to 12 months and may be longer in complex cases.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'ما هي تكلفة الاستشارات القانونية؟',
        en: 'What is the cost of legal consultations?',
      },
      answers: {
        ar: [
          'تختلف التكلفة حسب نوع الخدمة، ومدتها، وطبيعة القضية. تقدم الشركة أسعاراً عادلة وشفافة يتم توضيحها عند التواصل بناء على تقييم الحالة القانونية.',
        ],
        en: [
          'The cost varies depending on the type of service, its duration, and the nature of the case. The firm provides fair and transparent pricing which is clarified upon consultation based on the legal assessment.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'هل يمكن إنهاء النزاعات بدون اللجوء للمحكمة؟',
        en: 'Can disputes be resolved without going to court?',
      },
      answers: {
        ar: [
          'نعم، يمكن ذلك عبر التسويات الودية، وصيغ الاتفاقات المرضية للطرفين، وصياغة محاضر صلح رسمية تحفظ الحقوق وتمنع النزاعات المستقبلية.',
        ],
        en: [
          'Yes, disputes can be resolved through amicable settlements, mutually acceptable agreements, and drafting official reconciliation documents that protect rights and prevent future disputes.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'ما هي خطوات تأسيس شركة في السعودية؟',
        en: 'What are the steps to establish a company in Saudi Arabia?',
      },
      answers: {
        ar: [
          'تبدأ الخطوات بتحديد نوع الكيان التجاري، ثم استخراج السجل التجاري، وفتح ملف لدى هيئة الزكاة والضريبة والجمارك، ثم إنشاء حسابات بنكية، واستكمال التراخيص اللازمة حسب النشاط.',
        ],
        en: [
          'The process begins by determining the type of business entity, obtaining a commercial registration, opening a file with the Zakat, Tax and Customs Authority, setting up bank accounts, and completing the required licenses based on the business activity.',
        ],
      },
      open: false,
    },
    {
      question: {
        ar: 'هل يتم الحفاظ على سرية معلومات العميل؟',
        en: 'Is client information kept confidential?',
      },
      answers: {
        ar: [
          'نعم، نلتزم بسرية تامة وفق أحكام الأنظمة السعودية، ويُمنع إفشاء أي معلومة تخص العملاء أو قضاياهم تحت أي ظرف.',
        ],
        en: [
          'Yes, we maintain complete confidentiality in accordance with Saudi regulations, and no client information or case details can be disclosed under any circumstances.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'كيف يساعدني المحامي في حماية مشروعي التجاري؟',
        en: 'How can a lawyer help me protect my business?',
      },
      answers: {
        ar: [
          'من خلال صياغة العقود، حفظ العلامة التجارية، مراجعة الالتزامات القانونية، تنظيم شراكات العمل، وتقديم استشارات مستمرة تمنع المخالفات أو النزاعات المستقبلية.',
        ],
        en: [
          'By drafting contracts, protecting trademarks, reviewing legal obligations, organizing business partnerships, and providing ongoing consultations to prevent violations or future disputes.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'هل يمكن متابعة قضية عن بُعد دون مراجعة المكتب؟',
        en: 'Can I follow up on my case remotely without visiting the office?',
      },
      answers: {
        ar: [
          'نعم، يمكن متابعة جميع القضايا والتوكيلات إلكترونياً عبر منصات وزارة العدل، ويمكن للشركة تمثيلك بالكامل دون حضورك إلا إذا تطلب النظام حضورك شخصياً.',
        ],
        en: [
          'Yes, all cases and authorizations can be followed up electronically through the Ministry of Justice platforms, and the firm can fully represent you unless personal attendance is required by law.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'هل تقدمون خدمات التوثيق خارج الرياض؟',
        en: 'Do you provide notarization services outside Riyadh?',
      },
      answers: {
        ar: [
          'نعم، نقدم خدمات التوثيق إلكترونياً في مختلف مناطق المملكة عبر الموثقين المعتمدين ومنصات وزارة العدل.',
        ],
        en: [
          'Yes, we provide electronic notarization services across different regions of Saudi Arabia through accredited notaries and Ministry of Justice platforms.',
        ],
      },
      open: false,
    },

    {
      question: {
        ar: 'كيف أعرف نوع الخدمة القانونية المناسبة لحالتي؟',
        en: 'How can I know the legal service that fits my situation?',
      },
      answers: {
        ar: [
          'يكفي تقديم شرح مختصر لحالتك، وسيقوم الفريق القانوني بتحديد الخدمة المناسبة وتوضيح الإجراءات الصحيحة التي تضمن حقوقك.',
        ],
        en: [
          'A brief description of your situation is enough, and our legal team will determine the appropriate service and explain the correct procedures that protect your rights.',
        ],
      },
      open: false,
    },
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Subscribe to language changes
    this.currentLang = this.languageService.getCurrentLang();
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLang = lang;
      }
    );
  }

  ngOnDestroy() {
    // Cleanup subscription
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
