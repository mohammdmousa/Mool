import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { PushDataService } from '../../services/push-data.service';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrl: './designers.component.css',
})
export class DesignersComponent implements OnInit {
  api: string = `${environment.API_BASE_URL}designer/designers/`;
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private pushData: PushDataService
  ) {}

  ngOnInit(): void {
    this.updateMetaTags(
      'Designer Form ',
      'Designers, Activities, Angular',
      'This is the Designers page description.'
    );
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.pushData
        .pushData(this.api, {
          name: form.value.full_name,
          phone: form.value.contact_number,
          email: form.value.email,
          nationality: form.value.nationality,
          date_of_birth: form.value.date_of_birth,
          website: form.value.portfolio,
          social_account: form.value.social_account,
        })
        .subscribe({
          next: (res) => console.log('Post created successfully:', res),
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
            });
            console.error('Error creating post:', err);
          },
          complete: () => {
            Swal.fire({
              icon: 'success',
              confirmButtonText: 'OK',
            });

            form.reset();
          },
        });
    }
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
