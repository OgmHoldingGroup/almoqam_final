import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/services/language.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import {
  NgxIntlTelInputModule,
  CountryISO,
  SearchCountryField,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { GoogleMapComponent } from '../../shared/components/google-map/google-map.component';
import {
  adressAR,
  adressEN,
  email,
  phoneNumAr,
  phoneNumEn,
} from '../../shared/data/data';
import { openWhatsApp } from '../../shared/funcations/whatapp';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    CommonModule,
    MainHeaderComponent,
    GoogleMapComponent, // Add the new component
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  PhoneNumberFormat = PhoneNumberFormat;

  email = email;
  addressAR = adressAR;
  adressEN = adressEN;
  phoneNumEn = phoneNumEn;
  phoneNumAr = phoneNumAr;
  openWhatApp = openWhatsApp;

  contactForm!: FormGroup;
  currentLang: string = 'ar';
  private langSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.currentLang = this.languageService.getCurrentLang();
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLang = lang;
      }
    );

    // Initialize form
    this.contactForm = this.fb.group({
      phone: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      caseType: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastr.error(
        this.currentLang === 'ar'
          ? 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح'
          : 'Please fill all required fields correctly',
        this.currentLang === 'ar' ? 'خطأ' : 'Error'
      );
      return;
    }

    Swal.fire({
      title:
        this.currentLang === 'ar'
          ? 'هل أنت متأكد من إرسال الرسالة؟'
          : 'Are you sure you want to send this message?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d4af6a',
      cancelButtonColor: '#1a3d3d',
      confirmButtonText:
        this.currentLang === 'ar' ? 'نعم، أرسلها' : 'Yes, send it',
      cancelButtonText: this.currentLang === 'ar' ? 'إلغاء' : 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate sending...
        setTimeout(() => {
          this.toastr.success(
            this.currentLang === 'ar'
              ? 'تم إرسال الرسالة بنجاح!'
              : 'Message sent successfully!',
            this.currentLang === 'ar' ? 'نجاح' : 'Success'
          );
          console.log('Form Data:', this.contactForm.value);
          this.contactForm.reset();
        }, 500);
      }
    });
  }

  // Helper to access form controls easily in template
  get f() {
    return this.contactForm.controls;
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
