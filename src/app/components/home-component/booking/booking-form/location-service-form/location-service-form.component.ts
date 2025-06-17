import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  name: string;
  categories: Services[];
}

interface Services {
  name: string;
  price: number;
}
@Component({
  selector: 'app-location-service-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './location-service-form.component.html',
  styleUrls: ['./location-service-form.component.css'],
})
export class LocationServiceFormComponent implements OnInit {
  searchTerm: string = '';
  servicesSearchTerm: string = '';

  bookingData: BookingData = {
    location: '',
    area: '',
  };

  locations: Location[] = [
    {
      city: '3rd settelment',
      areas: ['Evo fitness club'],
    },

    {
      city: 'El Mohandseen',
      areas: ['Tawfikia Tennis Club'],
    },
  ];

  services: Category[] = [
    {
      name: 'Sports Rehab',
      categories: [
        {
          name: 'Consultation',
          price: 500,
        },
        {
          name: 'Rehab Session',
          price: 900,
        },
      ],
    },
    {
      name: 'Sports Recovery',
      categories: [
        { name: 'Full Body', price: 900 },
        { name: 'Half Body', price: 600 },
      ],
    },

    {
      name: 'Measurements',
      categories: [
        {
          name: 'Athelete Profile',
          price: 3.5,
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}

  get filteredLocations(): Location[] {
    if (!this.searchTerm) {
      return this.locations;
    }

    return this.locations.filter(
      (location) =>
        location.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        location.areas.some((area) =>
          area.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
    );
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

  handleServiceCategorySelection(name: string): void {
    this.bookingData.serviceCategory = name;
  }
}
