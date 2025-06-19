import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
export interface Partner {
  id: string | number;
  name?: string;
  logo?: string;
}
@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CardModule],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css'],
})
export class OurPartnersComponent implements OnInit {
  partners: Partner[] = [
    {
      id: 1,
      name: 'مستشفى الملك فيصل',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f',
    },
    {
      id: 2,
      name: 'النادي الأهلي',
      logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    },
    {
      id: 3,
      name: 'مركز الأمير سلطان',
      logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
    },
    {
      id: 4,
      name: 'اتحاد كرة القدم',
      logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
    },
    {
      id: 5,
      name: 'مجمع الملك عبدالله',
      logo: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc',
    },
  ];
  constructor() {}

  ngOnInit() {}

  trackByPartnerId(index: number, partner: Partner): string | number {
    return partner.id;
  }
}
