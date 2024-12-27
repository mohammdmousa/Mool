import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mool';
  constructor (
    private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta
  ) {
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  private setDefaultMetaTags() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'description', content: 'Default description' },
      { name: 'keywords', content: 'Default, Keywords' },
    ]);
  }
}
