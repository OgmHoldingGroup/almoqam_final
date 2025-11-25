import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }

  content = {
    whoUs: {
      title: {
        ar: 'من نحن',
        en: 'Who We Are',
      },
      description: {
        ar: ' شركة د. سليمان بن صالح المقحم للمحاماة والاستشارات القانونية تُعد شركة د. سليمان بن صالح المقحم للمحاماة والاستشارات القانونية إحدى الشركات القانونية الرائدة في المملكة العربية السعودية، حيث تجمع بين الخبرة العلمية و الممارسة القانونية المتعمقة في مختلف فروع القانون. تعمل الشركة بترخيص واعتماد كامل من الجهات الرسمية، وتتخذ من مدينة الرياض مقرًا رئيسيًا لإدارة أعمالها وتقديم خدماتها لعملائها داخل المملكة وخارجها، وفق أعلى المعايير التنظيمية والضوابط القانونية السعودية والدولية. تقدم الشركة مجموعة واسعة من الخدمات القانونية للأفراد والشركات ورواد الأعمال والمستثمرين والجهات الحكومية، وتتميز بتقديم حلول قانونية دقيقة ومتكاملة تتوافق مع الأنظمة السعودية وتلبي احتياجات السوق.',
        en: 'Dr. Sulaiman bin Saleh Al-Muqhem Law Firm and Legal Consultations is one of the leading legal firms in the Kingdom of Saudi Arabia, combining academic expertise with deep legal practice across various branches of law. The firm operates with full licensing and accreditation from official authorities, and is headquartered in Riyadh to manage its operations and provide services to clients inside and outside the Kingdom, in accordance with the highest regulatory standards and Saudi and international legal controls. The firm offers a wide range of legal services to individuals, companies, entrepreneurs, investors, and government entities, and is distinguished by providing accurate and integrated legal solutions that comply with Saudi regulations and meet market needs.',
      },
      image: 'imgs/cor/whoUs.jpg',
    },
    whyUs: {
      title: {
        ar: 'لماذا نحن',
        en: 'Why Choose Us',
      },
      description: {
        ar: 'في شركة د. سليمان  بن صالح المقحم للمحاماة والاستشارات القانونية نعتز بخبرة قانونية تمتد لأكثر من عشرون  عامًا، وبهيكل تنظيمي يضم أقسامًا متخصصة تغطي مختلف فروع القانون. نتميز بالدقة في الإجراءات، وسرعة إنجاز المعاملات، والحرص الدائم على حماية حقوق العملاء وتقديم ما يخدم مصالحهم بأعلى مستويات الأمان والسرية.',
        en: 'At Dr. Sulaiman Bin Saleh Al-Muqham Law Firm and Legal Consultations, we take pride in our legal experience spanning more than twenty years, and in an organizational structure that includes specialized departments covering various branches of law. We are distinguished by the accuracy of procedures, the speed of completing transactions, and the constant commitment to protecting clients` rights and providing services that serve their interests with the highest levels of security and confidentiality.',
      },
      features: [
        {
          ar: 'خبرة قانونية تتجاوز عشرون عامًا',
          en: 'Legal expertise exceeding twenty years',
        },
        {
          ar: 'دقة عالية في الإجراءات القانونية',
          en: 'High precision in legal procedures',
        },
        {
          ar: 'أمان وسريّة في كل معاملة',
          en: 'Security and confidentiality in every transaction',
        },
        {
          ar: 'سرعة استجابة ومتابعة مستمرة مع العميل',
          en: 'Quick response and continuous follow-up with clients',
        },
        {
          ar: 'أقسام متخصصة في مختلف فروع القانون',
          en: 'Specialized departments in various branches of law',
        },
        {
          ar: 'اهتمام حقيقي بحقوق العملاء وحماية مصالحهم',
          en: 'Genuine care for client rights and protecting their interests',
        },
      ],
    },
  };
}
