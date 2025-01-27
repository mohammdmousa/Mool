import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dine',
  templateUrl: './dine.component.html',
  styleUrl: './dine.component.css',
})
export class DineComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.updateMetaTags(
      'Dines | Art Of Living Mall',
      'Dine, Activities, Angular',
      'This is the Dine page description.'
    );
  }
  private updateMetaTags(title: string, keywords: string, description: string) {
    this.titleService.setTitle(title);

    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
