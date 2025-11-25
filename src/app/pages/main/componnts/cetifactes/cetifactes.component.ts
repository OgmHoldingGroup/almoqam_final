import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../../../shared/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cetifactes',
  imports: [CommonModule],
  templateUrl: './cetifactes.component.html',
  styleUrl: './cetifactes.component.scss',
})
export class CetifactesComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  certificats = signal<string[]>([
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
  ]);
}
