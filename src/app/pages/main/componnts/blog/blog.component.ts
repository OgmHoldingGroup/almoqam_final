import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogPost } from '../../interface/interface';
import { NgClass, NgFor } from '@angular/common';
import { PaginatorModule, Paginator } from 'primeng/paginator';
import { LanguageService } from '../../../../shared/services/language.service';
import { scrollToElement } from '../../../../shared/funcations/scrollT0';
import { legalServicesTranslations } from '../../../legal-documentation-services/legalServicesTranslations ';

@Component({
  selector: 'app-blog',
  imports: [TranslatePipe, RouterLink, NgFor, Paginator, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  // استخدم البيانات من legalServicesTranslations
  blogPosts = signal<any[]>(
    legalServicesTranslations.map((service) => ({
      id: service.id,
      slug: service.slug,
      img: service.img,
      title: {
        ar: service.ar.title,
        en: service.en.title,
      },
      date: '2025-01-15',
      category: {
        ar: 'خدمات قانونية',
        en: 'Legal Services',
      },
    }))
  );

  first = signal(0);
  rows = signal(2);

  paginatedPosts = computed(() =>
    this.blogPosts().slice(this.first(), this.first() + this.rows())
  );

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    scrollToElement('.blog-section');
  }

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
