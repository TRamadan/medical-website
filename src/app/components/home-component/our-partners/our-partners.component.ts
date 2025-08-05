import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Partners } from './models/partners';
@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CardModule],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.responsive.scss'],
})
export class OurPartnersComponent implements OnInit {
  @Input() logos: Partners[] = [];
  @Input() animationDuration: number = 30;
  @Input() backgroundColor: string =
    'linear-gradient(to right, rgb(250 245 255), rgb(239 246 255))';

  defaultLogos: Partners[] = [
    {
      id: 1,
      name: 'Partner 1',
      logo: 'assets/logo_1.png',
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: 'assets/logo_2.png',
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: 'assets/logo_3.png',
    },
    {
      id: 4,
      name: 'Partner 4',
      logo: 'assets/logo_4.png',
    },
    {
      id: 5,
      name: 'Partner 5',
      logo: 'assets/logo_5.png',
    },
    {
      id: 6,
      name: 'Partner 6',
      logo: 'assets/logo_6.png',
    },
  ];

  duplicatedLogos: Partners[] = [];
  constructor() {}

  ngOnInit() {
    if (this.logos.length === 0) {
      this.logos = this.defaultLogos;
    }
    this.duplicatedLogos = [...this.logos, ...this.logos];
  }
}
