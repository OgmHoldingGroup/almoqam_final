import { Component, inject, signal } from "@angular/core";

import { TranslatePipe } from "@ngx-translate/core";
import { DecimalPipe } from "@angular/common";
import { MainHeaderComponent } from "../../../../shared/components/main-header/main-header.component";
import { openWhatsApp } from "../../../../shared/funcations/whatapp";
import { LanguageService } from "../../../../shared/services/language.service";
import { OurSERVICES } from "../../../main/interface/interface";
import { RouterLink } from "@angular/router";
import { SERVICES } from "../../data/services";

@Component({
  selector: "app-our-services",
  imports: [MainHeaderComponent, TranslatePipe, DecimalPipe, RouterLink],
  templateUrl: "./our-services.component.html",
  styleUrl: "./our-services.component.scss",
})
export class OurServicesComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  // WhatsApp
  openWhatsApp = openWhatsApp;
  SERVICES = SERVICES;
}
