import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent implements OnInit, AfterViewInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngAfterViewInit(): void {
    $('.events-slider').slick({
      autoplay: true,
      arrows: false,
      speed: 4000,
      infinite: true,
      dots: true,
      swipeToSlide: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      cssEase: 'linear',
      swipe: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      prevArrow:
        '<a href="javascript:;" class="slick-arrow slick-prev"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="60" height="60" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M27 15L11 31L27 47" stroke="#101820" stroke-width="2"/><path d="M11 31L51 31" stroke="#101820" stroke-width="2"/></svg></a>',
      nextArrow:
        '<a href="javascript:;" class="slick-arrow slick-next"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="61" y="61" width="60" height="60" transform="rotate(-180 61 61)" fill="#D0D3D4" stroke="#101820" stroke-width="2"/><path d="M35 47L51 31L35 15" stroke="#101820" stroke-width="2"/><path d="M51 31H11" stroke="#101820" stroke-width="2"/></svg></a>',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags(
      'Event',
      'Event, Activities, Angular',
      'This is the Event page description.'
    );
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
