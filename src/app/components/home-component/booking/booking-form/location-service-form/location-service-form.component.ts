import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';

interface Location {
  city: string;
  areas: string[];
}

interface BookingData {
  location: string;
  area: string;
  serviceCategory?: any;
}

interface Category {
  id?: number;
  name: string;
  categories: Services[];
}

interface Services {
  id?: number;
  name: string;
  price: any;
  locations: Location[];
}
@Component({
  selector: 'app-location-service-form',
  standalone: true,
  imports: [FormsModule, CardModule, MessagesModule],
  templateUrl: './location-service-form.component.html',
  styleUrls: ['./location-service-form.component.css'],
})
export class LocationServiceFormComponent implements OnInit {
  searchTerm: string = '';
  servicesSearchTerm: string = '';

  messages: Message[] | any;

  bookingData: BookingData = {
    location: '',
    area: '',
    serviceCategory: '',
  };

  locations: Location[] = [];

  services: Category[] = [
    {
      id: 1,
      name: 'Sports Rehab',
      categories: [
        {
          id: 1,
          name: 'Consultation',
          price: 500,
          locations: [
            {
              city: '3rd settelment',
              areas: ['Evo fitness club'],
            },
            {
              city: 'El Mohandseen',
              areas: ['Tawfikia Tennis Club'],
            },
          ],
        },
        {
          id: 2,
          name: 'Rehab Session',
          price: 900,
          locations: [
            {
              city: '3rd settelment',
              areas: ['Evo fitness club'],
            },
            {
              city: 'El Mohandseen',
              areas: ['Tawfikia Tennis Club'],
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: 'Sports Recovery',
      categories: [
        {
          id: 3,
          name: 'Full Body',
          price: 900,
          locations: [
            {
              city: '3rd settelment',
              areas: ['Evo fitness club'],
            },
            {
              city: 'El Mohandseen',
              areas: ['Tawfikia Tennis Club'],
            },
          ],
        },
        {
          id: 4,
          name: 'Half Body',
          price: 600,
          locations: [
            {
              city: '3rd settelment',
              areas: ['Evo fitness club'],
            },
          ],
        },
      ],
    },

    {
      id: 3,
      name: 'Measurements',
      categories: [
        {
          id: 5,
          name: 'Athelete Profile',
          price: '3500',
          locations: [
            {
              city: 'El Mohandseen',
              areas: ['Tawfikia Tennis Club'],
            },
          ],
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}

  get filteredLocations(): Location[] {
    // if (!this.searchTerm) {
    //   return this.locations;
    // }

    // return this.locations.filter(
    //   (location) =>
    //     location.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    //     location.areas.some((area) =>
    //       area.toLowerCase().includes(this.searchTerm.toLowerCase())
    //     )
    // );

    return [];
  }

  handleLocationSelect(area: string): void {
    this.bookingData.area = area;
  }

  isSelected(area: string): boolean {
    return this.bookingData.area === area;
  }

  isSelectedServiceCategory(name: string): boolean {
    return this.bookingData.serviceCategory === name;
  }

  handleServiceCategorySelection(service: any): void {
    debugger;
    this.bookingData.serviceCategory = service.name;
    this.locations = [];
    this.locations = service.locations;
    this.messages = [
      {
        severity: 'info',
        detail: `Your service is ${this.bookingData.serviceCategory}, and your location ${this.bookingData.area}`,
      },
    ];
  }
}
