import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
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
  Subscription: Subscription[] = [];
  ngOnInit(): void {
    this.updateMetaTags(
      'The Art Of Living - Shoping Mall ',
      'Event Details, Activities, Angular',
      'This is the Event Details page description.'
    );
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });
    this.getData();
  }

  getData() {
    const subscriber = this.fetchDAta.getDAta(this.api).subscribe({
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
    this.Subscription.push(subscriber);
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
  ngOnDestroy(): void {
    this.Subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
