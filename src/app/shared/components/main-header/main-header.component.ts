import { Component, input, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import { openWhatsApp } from '../../funcations/whatapp';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  currentLang = signal<string>('ar');
  showPath = input<boolean>(false);
  pageTitle = input<string>('');

  private langSubscription?: Subscription;

  constructor(private langSrv: LanguageService) {}

  ngOnInit(): void {
    this.currentLang.set(this.langSrv.getCurrentLang());

    this.langSubscription = this.langSrv.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  isEnglish(): boolean {
    return this.currentLang() === 'en';
  }

  openWhatsApp = openWhatsApp;
}
