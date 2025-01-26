import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  images: string[] = [
    'assets/images/aboutGal1.jpg',
    'assets/images/aboutGal2.jpg',
    'assets/images/aboutGal3.jpg',
    'assets/images/aboutGal4.jpg',
    'assets/images/aboutGal5.jpg',
    'assets/images/aboutGal6.jpg',
    'assets/images/aboutGal7.jpg',
    'assets/images/aboutGal8.jpg',
    'assets/images/aboutGal9.jpg',
    'assets/images/aboutGal10.jpg',
  ];
  ngOnInit(): void {
    this.updateMetaTags(
      'About | Art Of Living Mall ',
      'About, Activities, Angular',
      'This is the About page description.'
    );
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
