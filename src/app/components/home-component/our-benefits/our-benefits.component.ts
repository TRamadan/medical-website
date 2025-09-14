import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { OurBenefitsService } from './services/our-benefits.service';
import { signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Benefits } from './models/benefits';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-benefits',
  standalone: true,
  templateUrl: './our-benefits.component.html',
  styleUrls: ['./our-benefits.component.css'],
  imports: [CommonModule, TitleComponentComponent],
  providers: [OurBenefitsService],
})
export class OurBenefitsComponent implements OnInit {
  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;

  benefitsSignal = toSignal(this._ourBenefitsService.getAllBenefits(), {
    initialValue: [],
  });

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourBenefitsService: OurBenefitsService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
  }
}
