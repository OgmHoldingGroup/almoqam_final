import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../shared/services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-pic',
  imports: [NgClass],
  templateUrl: './main-pic.component.html',
  styleUrl: './main-pic.component.scss',
})
export class MainPicComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  attorneyData = {
    name: {
      ar: 'د. سليمان بن صالح المقحم',
      en: 'Dr. Sulaiman bin Saleh Al-Muqhem',
    },
    title: {
      ar: 'المحامي والمستشار القانوني',
      en: 'Attorney & Legal Consultant',
    },
    bio: {
      ar: `يُعد د. سليمان بن صالح المقحم أحد المحامين البارزين في المملكة، بخبرة تمتد لأكثر من عشرين عامًا في المجال القانوني، وهو الرئيس التنفيذي لشركة د. سليمان بن صالح المقحم للمحاماة والاستشارات القانونية. حاصل على بكالوريوس في القانون (2001) كما حصل على درجة الماجستير والدكتوراه عام (2006) ولديه الكثير من الدورات والندوات في مجال القانون. عضو في الهيئة السعودية للمحامين وعضو في عدة جهات قانونية ومهنية معتمدة في المملكة. يمتاز أسلوبه القانوني بالجمع بين فهم عميق للسلوك الإنساني أثناء النزاعات، خبرة عملية واسعة في الأنظمة السعودية، دقة عالية في الإجراءات القانونية، وحلول عملية تخدم مصلحة العميل قبل أي شيء.`,
      en: `Dr. Sulaiman bin Saleh Al-Muqhem is one of the most prominent attorneys in the Kingdom, with over twenty years of experience in the legal field. He serves as the Chief Executive Officer of Dr. Sulaiman bin Saleh Al-Muqhem Law Firm and Legal Consultations. He holds a Bachelor's degree in Law (2001), as well as Master's and Doctoral degrees (2006), and has completed numerous courses and seminars in the field of law. He is a member of the Saudi Bar Association and a member of several accredited legal and professional bodies in the Kingdom. He has delivered numerous training courses in the field of law. His legal approach is distinguished by combining a deep understanding of human behavior during disputes, extensive practical experience in Saudi regulations, high precision in legal procedures, and practical solutions that serve the client's best interests above all else.`,
    },
    qualifications: {
      ar: [
        'بكالوريوس في القانون (2001)',
        'درجة الماجستير والدكتوراه (2006)',
        'عضو في الهيئة السعودية للمحامين',
        'عضو في عدة جهات قانونية ومهنية معتمدة',
        'مدرب معتمد في مجال المحاماة',
      ],
      en: [
        "Bachelor's degree in Law (2001)",
        "Master's and Doctoral degrees (2006)",
        'Member of the Saudi Bar Association',
        'Member of several accredited legal and professional bodies',
        'Certified trainer in the field of law',
      ],
    },
    image: 'imgs/cor/MainPhoto.webp',
    social: {
      instagram: 'https://www.instagram.com/Almughemlaw',
      twitter: 'https://x.com/Almughemlaw', // X (Twitter سابقًا)
      tiktok: 'https://www.tiktok.com/@Almughemlaw',
      facebook: 'https://www.facebook.com/Almughemlaw',
      youtube: 'https://www.youtube.com/@Almughemlaw',
      linkedin: 'https://www.linkedin.com/company/almughemlaw',
    },
  };

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
