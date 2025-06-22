import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';

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
export class LocationServiceFormComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  servicesSearchTerm: string = '';
  private languageSubscription?: Subscription;

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

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(() => {
      // Component will automatically update when language changes
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

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
        detail: this.translationService.translate('booking.locationService.selectionMessage', {
          service: this.bookingData.serviceCategory,
          location: this.bookingData.area
        }),
      },
    ];
  }
}
