import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { filter, Subscription } from 'rxjs';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { openWhatsApp } from '../../funcations/whatapp';
import { email, phoneNumEn } from '../../data/data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLang = 'ar';
  menuOpen = false;
  email = email;
  phoneNum = phoneNumEn;

  private langSubscription?: Subscription;
  private routerSubscription?: Subscription;
  openWhatsApp = openWhatsApp;

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private zone: NgZone
  ) {}
  scrollTo(sectionId: string) {
    const scroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const header = document.querySelector('app-main-header'); // أو أي selector للهيدر
        const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;

        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight - 10; // 10px margin إضافية

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        const interval = setInterval(() => {
          if (scroll()) clearInterval(interval);
        }, 50);
      });
    } else {
      const interval = setInterval(() => {
        if (scroll()) clearInterval(interval);
      }, 50);
    }
  }

  ngOnInit() {
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => (this.currentLang = lang)
    );

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
        document.body.style.overflow = '';

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }

  switchLang(lang: string) {
    this.languageService.setLanguage(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  goToGmail() {
    const to = 'suleman@almughem.sa';
    const cc = 'abonasersa623@gmail.com';
    const subject = encodeURIComponent('استشارة من موقع سليمان المقحم');
    const body = encodeURIComponent('مرحبًا،\n\nأرغب في استشارة بخصوص ...');
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&cc=${cc}&su=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  }
}
