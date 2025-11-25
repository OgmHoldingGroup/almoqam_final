import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Testimonial } from '../../interface/interface';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  autoplayInterval: any;

  testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'نورة العبدالمحسن',
      location: 'عمان',
      rating: 5,
      text: 'التعامل مع أحد شركات المقاول وصولاً إلى صعب. عزمتهم إلى حالة محامٍ، وتجيب مناهج خالوثة في تصوير إيمائي بالتواصل مع محامي، وإلى حولة مفاهيم الخاص، لأريكي أحبته بشدة على خدمات وأقدم مساعدة المكتب الاستنادة مزايا',
    },
    {
      id: 2,
      name: 'أحمد السعيد',
      location: 'الرياض',
      rating: 5,
      text: 'خدمة ممتازة واحترافية عالية جداً. تم حل قضيتي بسرعة وكفاءة عالية. أنصح بشدة بالتعامل مع هذا المكتب المحترف',
    },
    {
      id: 3,
      name: 'فاطمة الزهراني',
      location: 'جدة',
      rating: 5,
      text: 'أنصح الجميع بالتعامل معهم. فريق محترف ومتعاون ويقدم استشارات قانونية ممتازة. شكراً لكم على الجهد الرائع',
    },
    {
      id: 4,
      name: 'محمد العتيبي',
      location: 'مكة',
      rating: 5,
      text: 'تجربة رائعة ومميزة. تعامل راقي واحترافي من الفريق. حل مشكلتي القانونية بكل سهولة ويسر',
    },
  ]);
  getTransformDirection() {
    const isRtl = document.dir === 'rtl';
    const offset = this.currentSlide() * -100;
    return isRtl ? `translateX(${offset * -1}%)` : `translateX(${offset}%)`;
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
    this.resetAutoplay();
  }

  nextSlide(): void {
    const next = (this.currentSlide() + 1) % this.testimonials().length;
    this.currentSlide.set(next);
  }

  prevSlide(): void {
    const prev =
      this.currentSlide() === 0
        ? this.testimonials().length - 1
        : this.currentSlide() - 1;
    this.currentSlide.set(prev);
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  getRatingArray(): number[] {
    return [0, 1, 2, 3, 4];
  }
}
