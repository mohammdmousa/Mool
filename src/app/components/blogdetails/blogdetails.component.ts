import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';
import { error } from 'console';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.css',
})
export class BlogdetailsComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    private fetchData: FetchDataService,
    private LanguageService: LanguageService
  ) {}
  currntLang: string = 'en';
  blogs: any[] = [];
  blog: any;
  error: string[] = [];
  loading: boolean = false;
  slug: string | null = null;
  api: string = `${environment.API_BASE_URL}blog/blogs/`;
  Subscription: Subscription[] = [];

  ngOnInit() {
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
      if (this.slug) {
        this.getBlogDetails(this.slug);

        console.log('Slug from URL:', this.slug);
      } else {
        console.error('Slug not provided in the URL');
      }
    });
    this.getBlogs();
    this.updateMetaTags(
      `blog${this.blog.id}`,
      `${this.blog.slug}`,
      `${this.blog.description}`
    );
  }
  getBlogs() {
    this.loading = true;
    const subscibe = this.fetchData.getDAta(this.api).subscribe({
      next: (res) => {
        this.blogs = res;
      },
      error: (err) => {
        this.error = err;
        console.log(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        console.log('Request completed.');
      },
    });
    this.Subscription.push(subscibe);
  }
  getBlogDetails(slug: string): void {
    this.loading = true;
    const subscibe = this.fetchData.getDAta(this.api).subscribe({
      next: (res) => {
        const blog = res.find((item: any) => item.slug === slug);
        if (blog) {
          this.blog = blog;
          console.log('Blog details:', this.blog);
        } else {
          console.error('Blog not found');
        }
      },
      error: (err) => {
        this.error = err;
        console.error('Error fetching blogs:', err);
      },
      complete: () => {
        this.loading = false;
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
    this.Subscription.forEach((sub) => sub.unsubscribe());
  }
}
