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

  messages: Message[] | any;
  locations: Location[] = [];

  categories: any[] = [];

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private _serviceCategory: ServiceslocationService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
    this.getAllCategories();
  }

  //here is the function needed to get all added categories
  getAllCategories(): void {
    this._serviceCategory.getServiceCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
      error: (error: any) => {
        //error handle goes here
      },
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  handleLocationSelect(area: string): void {
    // this.bookingData.area = area;
  }

  isSelected(area: string): boolean {
    return false;
    // return this.bookingData.area === area;
  }

  isSelectedServiceCategory(name: string): boolean {
    return false;
    // return this.bookingData.serviceCategory === name;
  }

  handleServiceCategorySelection(service: any): void {
    debugger;
  }
}
