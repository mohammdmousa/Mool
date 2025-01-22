import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private FetchData: FetchDataService,
    private LanguageService: LanguageService
  ) {}
  api: string = `${environment.API_BASE_URL}blog/blogs/`;
  blogs: any[] = [];
  loading: boolean = true;
  currntLang: string = '';
  error: string[] = [];
  Subscription: Subscription[] = [];

  ngOnInit(): void {
    this.updateMetaTags(
      'BLOG | The Art Of Living Mall',
      'Blog, Activities, Angular',
      'This is the Blog page description.'
    );
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });
    this.getBlogs();
  }

  getBlogs() {
    this.loading = true;
    const subscibe = this.FetchData.getDAta(this.api).subscribe({
      next: (res) => {
        this.blogs = res;
      },
      error: (err) => {
        this.error = err.message;
        console.error('Error fetching blogs:', err.message);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        console.log('Request completed.');
      },
    });
    this.Subscription.push(subscibe);
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
