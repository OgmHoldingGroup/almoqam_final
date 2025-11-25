import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { LanguageService } from '../../../../shared/services/language.service';
import { OurSERVICES } from '../../../main/interface/interface';
import { MainHeaderComponent } from '../../../../shared/components/main-header/main-header.component';
import { DecimalPipe } from '@angular/common';
import { SERVICES } from '../../data/services';
@Component({
  selector: 'app-service-details',
  imports: [MainHeaderComponent, DecimalPipe],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;

  openWhatsApp = openWhatsApp;

  service = signal<OurSERVICES | null>(null);

  SERVICES = SERVICES;

  ngOnInit() {
    const serviceId = Number(this.route.snapshot.paramMap.get('id'));
    const foundService = this.SERVICES().find((s) => s.id === serviceId);

    if (foundService) {
      this.service.set(foundService);
    } else {
      this.router.navigate(['/services']);
    }
  }

  goBack() {
    this.router.navigate(['/our-services']);
  }
}
