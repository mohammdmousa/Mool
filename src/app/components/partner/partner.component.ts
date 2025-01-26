import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { PushDataService } from '../../services/push-data.service';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css',
})
export class PartnerComponent implements OnInit {
  api: string = `${environment.API_BASE_URL}contact/partners/`;
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private pushData: PushDataService
  ) {}

  ngOnInit(): void {
    this.updateMetaTags(
      'partner ',
      'Event Details, Activities, Angular',
      'This is the Event Details page description.'
    );
  }
  onSubmit(form: NgForm) {
    console.log(form.value);

    this.pushData
      .pushData(this.api, {
        category: form.value.category,
        brand_name: form.value.brand_name,
        trade_license: form.value.license,
        owner: form.value.owner,
        address: form.value.address,
        key_personal: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        website: form.value.web,
        no_of_year: form.value.business_years,
        outlet: form.value.outlets,
        shop_size: form.value.shop_size,
        target_rent: form.value.rent,
        // category: 'form.value.category',
        // brand_name: 'form.value.brand_name',
        // trade_license: 'form.value.license',
        // owner: 'form.value.owner',
        // address: 'form.value.address',
        // key_personal: ' form.value.name',
        // phone: 5555,
        // email: 'https://example.com',
        // website: 'https://www.google.com',
        // no_of_year: 4,
        // outlet: 8,
        // shop_size: 8,
        // target_rent: 5,
      })
      .subscribe({
        next: (response) => console.log(response),
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
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
