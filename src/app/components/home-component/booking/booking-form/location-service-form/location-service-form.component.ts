import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';
import { ServiceslocationService } from './services/serviceslocation.service';
import { CategorySearchPipe } from './category-search.pipe';

@Component({
  selector: 'app-location-service-form',
  standalone: true,
  imports: [FormsModule, CardModule, MessagesModule, CategorySearchPipe],
  templateUrl: './location-service-form.component.html',
  styleUrls: ['./location-service-form.component.css'],
})
export class LocationServiceFormComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'ar' = 'en';
  searchTerm: string = '';
  servicesSearchTerm: string = '';
  private languageSubscription?: Subscription;
  previousServiceId: number | null = null;
  @Output() choosedServiceAndLocation = new EventEmitter<any>();

  messages: Message[] = [];
  locations: any[] = [];
  categories: any[] = [];
  bookingData: any = {};

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private _serviceCategory: ServiceslocationService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );

    const savedBookingData = localStorage.getItem('bookingData');
    if (savedBookingData) {
      this.bookingData = JSON.parse(savedBookingData);
      if (this.bookingData.serviceName && this.bookingData.locationName) {
        this.messages = [
          {
            severity: 'success',
            detail: this.translationService.translate(
              'booking.locationService.selectionMessage',
              {
                service: this.bookingData.serviceName,
                location: this.bookingData.locationName,
              }
            ),
          },
        ];
      } else if (this.bookingData.serviceName) {
        this.messages = [
          {
            severity: 'info',
            detail: `Your chosen service is ${this.bookingData.serviceName}. Now select a location.`,
          },
        ];
      }
    }
    this.getAllCategories();
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  getAllCategories(): void {
    this._serviceCategory.getServiceCategories().subscribe({
      next: (res: any) => {
        this.categories = res.data;
      },
      error: (error: any) => {
        console.error('Error fetching categories', error);
      },
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  handleServiceSelection(category: any, service: any): void {
    debugger;
    const prevServiceId = this.bookingData.serviceId ?? null;
    this.bookingData.serviceCategoryId = category.id;
    this.bookingData.serviceCategoryName =
      this.currentLang === 'ar' ? category.nameAr : category.nameEn;

    this.bookingData.serviceId = service.id;
    this.bookingData.serviceName =
      this.currentLang === 'ar' ? service.nameAr : service.nameEn;

    this.locations = service.locations || [];

    if (prevServiceId !== service.id) {
      this.bookingData.locationId = null;
      this.bookingData.locationName = null;
    }

    service.subServices.length > 0
      ? (this.bookingData.isContainSubservices = true)
      : (this.bookingData.isContainSubservices = false);

    this.previousServiceId = service.id;

    this.messages = [
      {
        severity: 'info',
        detail: this.translationService.translate(
          'booking.locationService.selectionMessage',
          {
            service: this.bookingData.serviceName,
          }
        ),
      },
    ];
  }

  handleLocationSelect(location: any): void {
    this.bookingData.locationId = location.id;
    this.bookingData.locationName =
      this.currentLang === 'ar' ? location.nameAr : location.nameEn;

    this.messages = [
      {
        severity: 'success',
        detail: this.translationService.translate(
          'booking.locationService.selectionMessage',
          {
            service: this.bookingData.serviceName,
            location: this.bookingData.locationName,
          }
        ),
      },
    ];
    this.choosedServiceAndLocation.emit(this.bookingData);
  }

  isSelectedService(service: any): boolean {
    return this.bookingData.serviceId === service.id;
  }

  isSelectedLocation(location: any): boolean {
    return this.bookingData.locationId === location.id;
  }
}
