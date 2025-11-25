import { Component, inject } from '@angular/core';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { LanguageService } from '../../../../shared/services/language.service';
import { SERVICES } from '../../../services/data/services';
import { DecimalPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-services',
  imports: [NgClass, TranslatePipe, DecimalPipe, RouterLink],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss',
})
export class MainServicesComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  // WhatsApp
  openWhatsApp = openWhatsApp;
  SERVICES = SERVICES;
}
