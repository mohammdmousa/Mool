import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { AdvisorComponent } from './components/advisor/advisor.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogdetailsComponent } from './components/blogdetails/blogdetails.component';
import { BranddetailsComponent } from './components/branddetails/branddetails.component';
import { CaffeineComponent } from './components/caffeine/caffeine.component';
import { ContactComponent } from './components/contact/contact.component';
import { DesignersComponent } from './components/designers/designers.component';
import { DineComponent } from './components/dine/dine.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { EventdetailsComponent } from './components/eventdetails/eventdetails.component';
import { EventsComponent } from './components/events/events.component';
import { KidsbrandComponent } from './components/kidsbrand/kidsbrand.component';
import { OffersComponent } from './components/offers/offers.component';
import { PartnerComponent } from './components/partner/partner.component';
import { PlanComponent } from './components/plan/plan.component';
import { ShopComponent } from './components/shop/shop.component';
import { BrandComponent } from './components/brand/brand.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'advisor',
    component: AdvisorComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'blog_details/:slug',
    component: BlogdetailsComponent,
  },
  {
    path: 'branddetails',
    component: BranddetailsComponent,
  },
  {
    path: 'caffeine',
    component: CaffeineComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'designers',
    component: DesignersComponent,
  },
  {
    path: 'dine',
    component: DineComponent,
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent,
  },

  {
    path: 'eventdetails',
    component: EventdetailsComponent,
  },

  {
    path: 'event',
    component: EventsComponent,
  },
  {
    path: 'kidsbrand',
    component: KidsbrandComponent,
  },

  {
    path: 'offers',
    component: OffersComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'partner',
    component: PartnerComponent,
  },
  {
    path: 'plan',
    component: PlanComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
