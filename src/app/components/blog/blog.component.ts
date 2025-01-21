import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FetchDataService } from '../../services/fetch-data.service';
import { LanguageService } from '../../services/language.service';
import { retry } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private FetchData: FetchDataService,
    private route: ActivatedRoute,
    private LanguageService: LanguageService
  ) {}
  api: string = 'http://152.42.233.17/api/blog/blogs';
  blogs: any[] = [];
  loading: boolean = true;
  currntLang: string = '';
  ngOnInit(): void {
    this.updateMetaTags(
      'Blog',
      'Blog, Activities, Angular',
      'This is the Blog page description.'
    );
    this.LanguageService.currentLanguage$.subscribe({
      next: (res) => {
        this.currntLang = res;
      },
    });

    setTimeout(() => {
      this.getBlogs(this.api);
    }, 5000);
  }

  getBlogs(api: string): void {
    this.loading = true;

    this.FetchData.getDAta(this.api)
      .pipe(retry(3))
      .subscribe({
        next: (res) => {
          this.blogs = res;
          console.log('Data fetched successfully:', this.blogs);
        },
        error: (err) => {
          console.error('Error fetching blogs:', err.message);
        },
        complete: () => {
          this.loading = false;
          console.log('Request completed.');
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
