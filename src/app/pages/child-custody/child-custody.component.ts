import { Component, inject, signal } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { openWhatsApp } from '../../shared/funcations/whatapp';
import { FormsModule, NgModel } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { email, phoneNumEn } from '../../shared/data/data';

@Component({
  selector: 'app-child-custody',
  imports: [MainHeaderComponent, FormsModule],
  templateUrl: './child-custody.component.html',
  styleUrl: './child-custody.component.scss',
})
export class ChildCustodyComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  isHuman = false;
  openWhatsApp = openWhatsApp;
  email = email;
  phoneNum = phoneNumEn;
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
      title: 'قضايا حضانة الأطفال للزوج / الزوجة',
      contactUs: 'تواصل معنا',
      ourServices: 'خدماتنا',
      namePlaceholder: 'الاسم',
      phonePlaceholder: 'رقم الجوال',
      introText:
        'إذا كنت تفكر بالانفصال عن زوجتك أو زوجك، إما بالطلاق أو الخلع، يكون سببهما أيضاً... فال ، أن يكون مصيرهم؟ هل سننقلهم إلى اللافتة إل اللافتة؟ ولم أري تلقي احتفال بالعب؟ متى ستمر هذه الحضانة؟ وما هي الأسباب التي قد تؤدي إلى ذهاب الزوج أو الزوجة إلى القضاء أو النيابة لرفع قضية "الرؤية"؟ هذا ما لا نتعرف عليه من خلال هذا المقال الذي يجيب فيه الأستاذ المستشار محمد على عراس عن جميع هذه التساؤلات بصورة موجزة وواضحة.',
      mainHeading: 'لمن تكون حضانة الطفل بعد انفصال الزوجين؟',
      subHeading:
        'نص قانون الأحوال الشخصية المبني على مذهب الإمام أبي حنيفة المتعمد على أن الأم في أولى الأشخاص بحضانة الطفل، وبدنها في الترتيب الأشخاص الآخرين:',
      services: [
        {
          title: 'أم الأم.',
          description: '',
        },
        {
          title: 'أم الأب.',
          description: '',
        },
        {
          title: 'الأب',
          description:
            '(بعد أخر تعديل في القانون صار الأب في الترتيب الرابع في حضانة الطفل).',
        },
        {
          title:
            'الأخوات، وتقدم الأخت المنشقة عن الأخت لأم، وتقدم الأخت لأم عن الأخت لأب.',
          description: '',
        },
        {
          title: 'الخالات، وبدنها بالحالة الكبيرة.',
          description: '',
        },
        {
          title: 'بنات الأخت، وبدنها بالكبيرة أيضاً.',
          description: '',
        },
        {
          title: 'بنات الأخ.',
          description: '',
        },
        {
          title: 'العمّات.',
          description: '',
        },
        {
          title: 'خالات الأم.',
          description: '',
        },
        {
          title: 'خالات الأب.',
          description: '',
        },
        {
          title: 'عمّات الأم.',
          description: '',
        },
      ],
      whyUsTitle: 'حق الرؤية للطفل المحضون',
      whyUsPoints: [
        'كفل القانون حق الطفل في رؤية والديه حتى وإن كانا منفصلين، وحرص على ألا يكون الطفل طرفاً في الخلاف بين الزوجين، وليذا ضمن حق الزوج أن يرى الطفل المحضون بحسب ما أقره القانون، وذلك بإحدى طريقتين:',
        'تُمكَّن للزوجين أن ينفقا على كيفية ومواعيد وماكاو رؤية الطفل، وكذلك وأن كان عقد يتم توثيقه وتصريفه في مكتب التسوية ليكون بمثابة الصيغة التنفيذية الموثقة.',
        'وفي هذه الحالة إذا جاء الموعد المتفق عليه للرؤية ولم يأت الزوج أو لم تأت الزوجة ضمن حق الزوج أو الزوجة رفع دعوى بهذا العقد لإلزام القضاء الطرف الممتل بالإنفاق.',
      ],
      finalCtaTitle: 'عدم حصول اتفاق بين الزوجين على الرؤية',
      finalCtaDesc:
        'في هذه الحالة يقوم الأب برفع دعوى رؤية أمام القضاء، وحينها يجب أن تشتمل الدعوى على موعد ومكان الرؤية (والذي يجب أن يكون ضمن الأماكن التابعة لوزارة الشؤون الاجتماعية، مثل النوادي ومراكز الشباب).',
      btnContact: 'تواصل معنا',
      firmName: 'المقحم للمحاماة',
    },
    en: {
      title: 'Child Custody Cases for Husband/Wife',
      contactUs: 'Contact Us',
      ourServices: 'Our Services',
      namePlaceholder: 'Name',
      phonePlaceholder: 'Phone Number',
      introText:
        'If you are considering separation from your spouse, either through divorce or khula, what will be the fate of your children? Who will take care of them? When will this custody continue? What are the reasons that may lead the husband or wife to file a "visitation" case? This is what we will learn through this article, in which Legal Advisor answers all these questions in a clear and concise manner.',
      mainHeading: 'Who Gets Child Custody After Separation?',
      subHeading:
        'Personal status law, based on the doctrine of Imam Abu Hanifa, stipulates that the mother is the first person entitled to custody of the child, followed by the following persons in order:',
      services: [
        {
          title: "Mother's mother.",
          description: '',
        },
        {
          title: "Father's mother.",
          description: '',
        },
        {
          title: 'Father',
          description:
            '(After the latest amendment to the law, the father became fourth in the custody order).',
        },
        {
          title:
            'Sisters, with full sister taking precedence over maternal sister, and maternal sister over paternal sister.',
          description: '',
        },
        {
          title: 'Maternal aunts, followed by the eldest.',
          description: '',
        },
        {
          title: "Sister's daughters, followed by the eldest.",
          description: '',
        },
        {
          title: "Brother's daughters.",
          description: '',
        },
        {
          title: 'Paternal aunts.',
          description: '',
        },
        {
          title: "Mother's maternal aunts.",
          description: '',
        },
        {
          title: "Father's maternal aunts.",
          description: '',
        },
        {
          title: "Mother's paternal aunts.",
          description: '',
        },
      ],
      whyUsTitle: 'Visitation Rights for the Custodial Child',
      whyUsPoints: [
        "The law guarantees the child's right to see both parents even if they are separated, and ensures that the child is not a party to the dispute between the spouses. Therefore, it guarantees the spouse's right to see the custodial child according to what the law stipulates, in one of two ways:",
        'The spouses can agree on how, when, and where to see the child, and this agreement can be documented and notarized in a settlement office to serve as an enforceable documented formula.',
        'In this case, if the agreed visitation time arrives and the spouse fails to bring the child, the other spouse has the right to file a lawsuit based on this contract to compel the other party to comply through the judiciary.',
      ],
      finalCtaTitle: 'No Agreement Between Spouses on Visitation',
      finalCtaDesc:
        'In this case, the father files a visitation lawsuit before the court, and the lawsuit must include the date and place of visitation (which must be in places affiliated with the Ministry of Social Affairs, such as clubs and youth centers).',
      btnContact: 'Contact Us',
      firmName: 'Almoqham Law Firm',
    },
  };
}
