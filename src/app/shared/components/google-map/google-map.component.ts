import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google-map',
  imports: [CommonModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent {
  private sanitizer = inject(DomSanitizer);
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  // Inputs for customization
  @Input() height: number = 300;
  @Input() borderRadius: number = 12;
  @Input() showTitle: boolean = false;
  @Input() showAddress: boolean = false;
  @Input() showDirectLink: boolean = false;
  @Input() variant: 'compact' | 'full' = 'full';

  // Map data
  mapLink = 'https://maps.app.goo.gl/H3bXb7k1ZMZWv1jq7';
  addressAR =
    'طريق الأمير سعد بن عبدالرحمن الأول الفرعي، الروابي، الرياض 14215';
  addressEN =
    'Prince Saad bin Abdulrahman Al Awwal Branch Road, Al Rawabi, Riyadh 14215';

  mapEmbedUrl: SafeResourceUrl;

  constructor() {
    const embedUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2657750822336!2d46.79085062485387!3d24.683388878045292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f073a19feb433%3A0x1c8ef200b1595679!2z2LTYsdmD2Kkg2LPZhNmK2YXYp9mGINi12KfZhNitINin2YTZhdmC2K3ZhSDZhNmE2YXYrdin2YXYp9ipINmI2KfZhNin2LPYqti02KfYsdin2Kog2KfZhNmC2KfZhtmI2YbZitipINmI2KfZhNiq2YjYq9mK2YI!5e0!3m2!1sar!2ssa!4v1763723579661!5m2!1sar!2ssa';
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
