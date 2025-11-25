import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { openWhatsApp } from '../../shared/funcations/whatapp';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { LandingComponentsComponent } from './componnts/landing-components/landing-components.component';
import { ServicesComponent } from './componnts/services/services.component';
import { TestimonialsComponent } from './componnts/testimonials/testimonials.component';
import { BlogComponent } from './componnts/blog/blog.component';
import { AboutComponent } from './componnts/about/about.component';
import { ContactComponent } from './componnts/contact/contact.component';
import { MainPicComponent } from './componnts/main-pic/main-pic.component';
import { MainServicesComponent } from './componnts/main-services/main-services.component';
import { CetifactesComponent } from './componnts/cetifactes/cetifactes.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    MainHeaderComponent,
    TranslatePipe,
    RouterLink,
    CommonModule,
    LandingComponentsComponent,
    ServicesComponent,
    TestimonialsComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    MainPicComponent,
    MainServicesComponent,
    CetifactesComponent,
    WhyUsComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  // Blog Posts

  // Contact Info

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  // WhatsApp
  openWhatsApp = openWhatsApp;
}
