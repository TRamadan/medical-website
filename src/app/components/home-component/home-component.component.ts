import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BrandsSectionComponent } from './brands-section/brands-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
@Component({
  standalone: true,
  imports: [
    HeroSectionComponent,
    BrandsSectionComponent,
    AboutUsSectionComponent,
  ],
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
