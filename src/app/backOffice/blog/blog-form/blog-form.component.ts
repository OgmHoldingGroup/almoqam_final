import { Component, inject, OnInit } from '@angular/core';

import { BlogPost } from '../blog.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../shared/services/language.service';
import { ToastrService } from 'ngx-toastr';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.scss',
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  private langService = inject(LanguageService);
  private toastr = inject(ToastrService);

  currentLang = this.langService.currentLangSignal;
  currentStep: number = 1;
  totalSteps: number = 5;

  // Image upload properties
  selectedImage: File | null = null;
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.createBlogForm();
  }

  ngOnInit(): void {}

  createBlogForm(): FormGroup {
    return this.fb.group({
      id: [null, [Validators.required, Validators.min(1)]],
      img: ['', Validators.required],
      slug: ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      ar: this.createContentForm(),
      en: this.createContentForm(),
    });
  }

  createContentForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      contactUs: ['تواصل معنا', Validators.required],
      ourServices: ['أحدث المقالات', Validators.required],
      namePlaceholder: ['الاسم', Validators.required],
      phonePlaceholder: ['رقم الجوال', Validators.required],
      introText: ['', [Validators.required, Validators.minLength(10)]],
      mainHeading: ['', [Validators.required, Validators.minLength(3)]],
      subHeading: [''],
      services: this.fb.array([]),
      additionalSections: this.fb.array([]),
      whyUsTitle: ['', Validators.required],
      whyUsIntro: ['', Validators.required],
      whyUsPoints: this.fb.array([]),
      expertInfo: this.fb.group({
        heading: ['', Validators.required],
        content: ['', Validators.required],
        features: this.fb.array([]),
      }),
      contactInfo: this.fb.group({
        phone: [
          '+966556832222',
          [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)],
        ],
        whatsapp: [
          'https://api.whatsapp.com/send?phone=966556832222',
          Validators.required,
        ],
        email: ['suleman@almughem.sa', [Validators.required, Validators.email]],
      }),
      finalCtaTitle: ['', Validators.required],
      finalCtaDesc: ['', Validators.required],
      faqItems: this.fb.array([]),
      btnContact: ['تواصل معنا', Validators.required],
      firmName: ['المقحم للمحاماة', Validators.required],
    });
  }

  // Image Upload Methods
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        this.toastr.error(
          'يرجى اختيار صورة بصيغة JPG, PNG, أو WEBP',
          'خطأ في نوع الملف'
        );
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        this.toastr.error(
          'حجم الصورة يجب أن لا يتجاوز 5 ميجابايت',
          'حجم الملف كبير'
        );
        return;
      }

      this.selectedImage = file;

      // Create image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);

      // Set filename in form
      this.blogForm.patchValue({ img: file.name });
      this.toastr.success('تم اختيار الصورة بنجاح', 'نجح');
    }
  }

  removeImage(): void {
    this.selectedImage = null;
    this.imagePreview = null;
    this.blogForm.patchValue({ img: '' });
    this.toastr.info('تم إزالة الصورة', 'إزالة');
  }

  // Services Array Methods
  get arServices(): FormArray {
    return this.blogForm.get('ar.services') as FormArray;
  }

  get enServices(): FormArray {
    return this.blogForm.get('en.services') as FormArray;
  }

  addService(): void {
    // Add to both Arabic and English simultaneously
    this.arServices.push(this.createServiceFormGroup());
    this.enServices.push(this.createServiceFormGroup());
    this.toastr.success('تمت إضافة خدمة جديدة للغتين', 'نجح');
  }

  createServiceFormGroup(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  removeService(index: number): void {
    this.arServices.removeAt(index);
    this.enServices.removeAt(index);
    this.toastr.warning('تم حذف الخدمة من اللغتين', 'تحذير');
  }

  // Why Us Points Array Methods
  get arWhyUsPoints(): FormArray {
    return this.blogForm.get('ar.whyUsPoints') as FormArray;
  }

  get enWhyUsPoints(): FormArray {
    return this.blogForm.get('en.whyUsPoints') as FormArray;
  }

  addWhyUsPoint(): void {
    this.arWhyUsPoints.push(this.createWhyUsPointFormGroup());
    this.enWhyUsPoints.push(this.createWhyUsPointFormGroup());
    this.toastr.success('تمت إضافة نقطة جديدة للغتين', 'نجح');
  }

  createWhyUsPointFormGroup(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  removeWhyUsPoint(index: any): void {
    this.arWhyUsPoints.removeAt(index);
    this.enWhyUsPoints.removeAt(index);
    this.toastr.warning('تم حذف النقطة من اللغتين', 'تحذير');
  }

  // FAQ Array Methods
  get arFaqItems(): FormArray {
    return this.blogForm.get('ar.faqItems') as FormArray;
  }

  get enFaqItems(): FormArray {
    return this.blogForm.get('en.faqItems') as FormArray;
  }

  addFaqItem(): void {
    this.arFaqItems.push(this.createFaqItemFormGroup());
    this.enFaqItems.push(this.createFaqItemFormGroup());
    this.toastr.success('تمت إضافة سؤال جديد للغتين', 'نجح');
  }

  createFaqItemFormGroup(): FormGroup {
    return this.fb.group({
      question: ['', [Validators.required, Validators.minLength(5)]],
      answer: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  removeFaqItem(index: number): void {
    this.arFaqItems.removeAt(index);
    this.enFaqItems.removeAt(index);
    this.toastr.warning('تم حذف السؤال من اللغتين', 'تحذير');
  }

  // Navigation Methods
  nextStep(): void {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep || this.validateCurrentStep()) {
      this.currentStep = step;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  validateCurrentStep(): boolean {
    let isValid = true;
    let errorMessage = '';

    switch (this.currentStep) {
      case 1:
        // Validate Basic Information
        const idControl = this.blogForm.get('id');
        const imgControl = this.blogForm.get('img');
        const slugControl = this.blogForm.get('slug');

        if (idControl?.invalid) {
          errorMessage = 'يرجى إدخال رقم المدونة بشكل صحيح';
          isValid = false;
        } else if (imgControl?.invalid) {
          errorMessage = 'يرجى اختيار صورة للمدونة';
          isValid = false;
        } else if (slugControl?.invalid) {
          errorMessage =
            'يرجى إدخال رابط مختصر صحيح (حروف صغيرة وأرقام وشرطات فقط)';
          isValid = false;
        }
        break;

      case 2:
        // Validate Content (both languages)
        const arTitle = this.blogForm.get('ar.title');
        const enTitle = this.blogForm.get('en.title');
        const arIntro = this.blogForm.get('ar.introText');
        const enIntro = this.blogForm.get('en.introText');

        if (arTitle?.invalid || enTitle?.invalid) {
          errorMessage = 'يرجى إدخال العنوان بالعربي والإنجليزي';
          isValid = false;
        } else if (arIntro?.invalid || enIntro?.invalid) {
          errorMessage = 'يرجى إدخال النص التمهيدي بالعربي والإنجليزي';
          isValid = false;
        }
        break;

      case 3:
        // Validate Services
        if (this.arServices.length === 0) {
          errorMessage = 'يرجى إضافة خدمة واحدة على الأقل';
          isValid = false;
        } else if (this.arServices.invalid || this.enServices.invalid) {
          errorMessage = 'يرجى التأكد من إدخال جميع بيانات الخدمات بشكل صحيح';
          isValid = false;
        }
        break;

      case 4:
        // Validate Why Us
        const arWhyTitle = this.blogForm.get('ar.whyUsTitle');
        const enWhyTitle = this.blogForm.get('en.whyUsTitle');

        if (arWhyTitle?.invalid || enWhyTitle?.invalid) {
          errorMessage = 'يرجى إدخال عنوان قسم "لماذا نحن" بالعربي والإنجليزي';
          isValid = false;
        } else if (this.arWhyUsPoints.length === 0) {
          errorMessage = 'يرجى إضافة نقطة واحدة على الأقل';
          isValid = false;
        }
        break;

      case 5:
        // Validate FAQ
        if (this.arFaqItems.length === 0) {
          errorMessage = 'يرجى إضافة سؤال واحد على الأقل';
          isValid = false;
        } else if (this.arFaqItems.invalid || this.enFaqItems.invalid) {
          errorMessage = 'يرجى التأكد من إدخال جميع الأسئلة والأجوبة بشكل صحيح';
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      this.toastr.error(errorMessage, 'خطأ في التحقق');
    }

    return isValid;
  }

  // Submit Method
  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    this.markFormGroupTouched(this.blogForm);

    if (this.blogForm.valid) {
      const blogData: BlogPost = this.blogForm.value;

      // In real scenario, upload image first
      if (this.selectedImage) {
        // TODO: Upload image to server
        console.log('Uploading image:', this.selectedImage);
      }

      console.log('Blog Data:', blogData);

      this.toastr.success(
        'تم حفظ المدونة بنجاح! سيتم نشرها قريباً.',
        'نجح العملية',
        { timeOut: 5000 }
      );

      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 2000);
    } else {
      this.toastr.error(
        'يرجى التأكد من ملء جميع الحقول المطلوبة بشكل صحيح',
        'خطأ في النموذج',
        { timeOut: 5000 }
      );

      // Find first invalid control and scroll to it
      this.scrollToFirstInvalidControl();
    }
  }

  // Helper method to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Helper method to scroll to first invalid control
  private scrollToFirstInvalidControl(): void {
    const firstInvalidControl = document.querySelector('.ng-invalid');
    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

  // Preview Method
  previewBlog(): void {
    if (this.blogForm.valid) {
      console.log('Preview:', this.blogForm.value);
      this.toastr.info('معاينة المدونة...', 'معاينة', { timeOut: 3000 });
      // TODO: Open preview in modal or new window
    } else {
      this.toastr.warning('يرجى إكمال جميع الحقول المطلوبة للمعاينة', 'تحذير');
    }
  }

  // Reset Form
  resetForm(): void {
    if (
      confirm(
        'هل أنت متأكد من إعادة تعيين النموذج؟ سيتم فقدان جميع البيانات المدخلة.'
      )
    ) {
      this.blogForm.reset();
      this.currentStep = 1;
      this.selectedImage = null;
      this.imagePreview = null;

      // Clear all arrays
      this.arServices.clear();
      this.enServices.clear();
      this.arWhyUsPoints.clear();
      this.enWhyUsPoints.clear();
      this.arFaqItems.clear();
      this.enFaqItems.clear();

      this.toastr.info('تم إعادة تعيين النموذج بنجاح', 'إعادة تعيين');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Helper method to check if a field is invalid and touched
  isFieldInvalid(fieldPath: string): boolean {
    const field = this.blogForm.get(fieldPath);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  // Helper method to get field error message
  getFieldError(fieldPath: string): string {
    const field = this.blogForm.get(fieldPath);
    if (field?.errors) {
      if (field.errors['required']) return 'هذا الحقل مطلوب';
      if (field.errors['minlength'])
        return `الحد الأدنى ${field.errors['minlength'].requiredLength} أحرف`;
      if (field.errors['email']) return 'البريد الإلكتروني غير صحيح';
      if (field.errors['pattern']) return 'الصيغة غير صحيحة';
      if (field.errors['min']) return 'القيمة يجب أن تكون أكبر من صفر';
    }
    return '';
  }
}
