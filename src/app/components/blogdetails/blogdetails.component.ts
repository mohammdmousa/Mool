import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';
import { error } from 'console';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrl: './blogdetails.component.css',
})
export class BlogdetailsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    private fetchData: FetchDataService,
    private LanguageService: LanguageService
  ) {}
  currntLang: string = '';
  blogs: any[] = [];
  blog: any;
  loading: boolean = false;
  slug: string | null = null;
  api: string = 'http://152.42.233.17/api/blog/blogs';
  // api: string = 'http://152.42.233.17/api/blog/blogs';

  ngOnInit() {
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });
    this.route.params.subscribe((params: any) => {
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
      'Blog Details',
      'Blog Details, Activities, Angular',
      'This is the Blog Details page description.'
    );
  }
  getBlogs() {
    return this.fetchData.getDAta(this.api).subscribe({
      next: (res) => (this.blogs = res),
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('sucss');
      },
    });
  }
  getBlogDetails(slug: string): void {
    this.loading = true;
    this.fetchData.getDAta(this.api).subscribe({
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
        console.error('Error fetching blogs:', err);
      },
      complete: () => {
        this.loading = false;
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
