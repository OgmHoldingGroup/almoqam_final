import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { MainHeaderComponent } from '../../../shared/components/main-header/main-header.component';
import { scrollToElement } from '../../../shared/funcations/scrollT0';
import { LanguageService } from '../../../shared/services/language.service';
import { legalServicesTranslations } from '../../legal-documentation-services/legalServicesTranslations ';

@Component({
  selector: 'app-all-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginatorModule, MainHeaderComponent],
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.scss',
})
export class AllBlogsComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  // جيب كل البلوجات
  blogPosts = signal<any[]>(
    legalServicesTranslations.map((service) => ({
      id: service.id,
      img: service.img,
      slug: service.slug,
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
  rows = signal(9); // 9 كاردز في الصفحة

  paginatedPosts = computed(() =>
    this.blogPosts().slice(this.first(), this.first() + this.rows())
  );

  // عنوان الصفحة حسب اللغة
  get pageTitle() {
    return this.currentLang() === 'ar' ? 'جميع المقالات' : 'All Articles';
  }

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    scrollToElement('.all-blogs-section');
  }

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
