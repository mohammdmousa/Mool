import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mool';
  constructor(private translate: TranslateService) {
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
}
