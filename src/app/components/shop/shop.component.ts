import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private fetchDAta: FetchDataService,
    private LanguageService: LanguageService
  ) {}
  api: string = `${environment.API_BASE_URL}shop/categories/`;
  error: string[] = [];
  categories: any[] = [];
  currntLang: string = '';

  ngOnInit(): void {
    this.updateMetaTags(
      'Shops',
      'Shops, Activities, Angular',
      'This is the Shops page description.'
    );
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });
    this.getData();
  }
  getData() {
    this.fetchDAta.getDAta(this.api).subscribe({
      next: (response) => {
        this.categories = response;
        console.log(response);
      },
      error: (er) => {
        this.error = er;
      },
      complete: () => {
        console.log('Data has been fetched.');
      },
    });
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    // تحديث العنوان
    this.titleService.setTitle(title);

    // تحديث أو إضافة كلمات المفتاحية والوصف
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
