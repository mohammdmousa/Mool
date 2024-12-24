import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MapComponent } from './components/map/map.component';
import { EventsComponent } from './components/events/events.component';
import { OffersComponent } from './components/offers/offers.component';
import { HiddenHeaderComponent } from './components/hidden-header/hidden-header.component';
import { AboutComponent } from './components/about/about.component';
import { PlanComponent } from './components/plan/plan.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { PartnerComponent } from './components/partner/partner.component';
import { DineComponent } from './components/dine/dine.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { DesignersComponent } from './components/designers/designers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { EventdetailsComponent } from './components/eventdetails/eventdetails.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { KidsbrandComponent } from './components/kidsbrand/kidsbrand.component';
import { CaffeineComponent } from './components/caffeine/caffeine.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http'; // Import HttpClientModule
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { BrandComponent } from './components/brand/brand.component';

// Function for the TranslateHttpLoader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    EventsComponent,

    OffersComponent,
    HiddenHeaderComponent,
    AboutComponent,
    PlanComponent,
    AdvisorComponent,
    PartnerComponent,
    DineComponent,
    BlogComponent,
    ShopComponent,
    EntertainmentComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    DesignersComponent,
    BranddetailsComponent,
    EventdetailsComponent,
    BlogdetailsComponent,
    KidsbrandComponent,
    CaffeineComponent,
    BrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
