import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { PushDataService } from '../../services/push-data.service';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  api: string = `${environment.API_BASE_URL}contact/contacts/`;
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private pushData: PushDataService
  ) {}

  ngOnInit(): void {
    this.updateMetaTags(
      'Contact Us | Art Of Living Mall',
      'Contact, Activities, Angular',
      'This is the Contact page description.'
    );
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.pushData
        .pushData(this.api, {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          company: form.value.company,
          message: form.value.message,
        })
        .subscribe({
          next: (response) => {
            console.log('Post created successfully:', response);
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
            });
            console.error('Error occurred while creating post:', error);
          },
          complete: () => {
            Swal.fire({
              icon: 'success',
              confirmButtonText: 'ok',
            });

            form.reset();
          },
        });
    } else {
      console.log('This Form Hs Not Valid');
    }
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    // تحديث العنوان
    this.titleService.setTitle(title);

    // تحديث أو إضافة كلمات المفتاحية والوصف
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
