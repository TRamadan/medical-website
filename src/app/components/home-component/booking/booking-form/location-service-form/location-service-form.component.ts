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

  // ✅ Get all categories and services
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

  // ✅ When user selects a service
  handleServiceSelection(category: any, service: any): void {
    this.bookingData.serviceCategoryId = category.id;
    this.bookingData.serviceCategoryName =
      this.currentLang === 'ar' ? category.nameAr : category.nameEn;

    this.bookingData.serviceId = service.id;
    this.bookingData.serviceName =
      this.currentLang === 'ar' ? service.nameAr : service.nameEn;

    // Update locations for the selected service
    this.locations = service.locations || [];

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

  trackById(index: number, item: any): number {
    return item.id;
  }

  // ✅ When user selects a location
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
  }

  // ✅ Helpers for UI
  isSelectedService(service: any): boolean {
    return this.bookingData.serviceId === service.id;
  }

  isSelectedLocation(location: any): boolean {
    return this.bookingData.locationId === location.id;
  }
}
