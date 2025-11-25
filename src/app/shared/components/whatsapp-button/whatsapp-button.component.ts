import { Component } from '@angular/core';
import { openWhatsApp } from '../../funcations/whatapp';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  openWhatsApp() {
    openWhatsApp();
  }
}
