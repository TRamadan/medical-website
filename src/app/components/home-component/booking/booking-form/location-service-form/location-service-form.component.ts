import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { TranslationService } from '../../../../../services/translation.service';
import { LanguageService } from '../../../../../services/language.service';
import { Subscription } from 'rxjs';
import { ServiceslocationService } from './services/serviceslocation.service';

@Component({
  selector: 'app-location-service-form',
  standalone: true,
  imports: [FormsModule, CardModule, MessagesModule],
  templateUrl: './location-service-form.component.html',
  styleUrls: ['./location-service-form.component.css'],
})
export class LocationServiceFormComponent implements OnInit, OnDestroy {
  currentLang: 'en' | 'ar' = 'en';
  searchTerm: string = '';
  servicesSearchTerm: string = '';
  private languageSubscription?: Subscription;
  previousServiceId: number | null = null;

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

    this.getAllCategories();
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  getAllCategories(): void {
    this._serviceCategory.getServiceCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
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
    localStorage.setItem('bookingData', JSON.stringify(this.bookingData));
  }

  isSelectedService(service: any): boolean {
    return this.bookingData.serviceId === service.id;
  }

  isSelectedLocation(location: any): boolean {
    return this.bookingData.locationId === location.id;
  }
}
