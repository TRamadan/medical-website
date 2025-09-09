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
  private languageSubscription?: Subscription;
  services: any[] = [
    {
      id: 1,
      title: 'Accelerated, Confident Comeback',
      description:
        'Get back stronger and more confident with fast, effective rehabilitation strategies tailored to your specific needs.',
      icon: 'fas fa-bolt', // Font Awesome equivalent of Zap
      color: 'primary',
    },
    {
      id: 2,
      title: 'Beyond Recovery - Peak Performance',
      description:
        'Push past limits and unlock peak performance through comprehensive care and advanced training methodologies.',
      icon: 'fas fa-chart-line', // Font Awesome equivalent of TrendingUp
      color: 'success',
    },
    {
      id: 3,
      title: 'Precision Care, Proven Results',
      description:
        'Benefit from tailored, data-powered solutions for consistent, effective results backed by proven methodologies.',
      icon: 'fas fa-bullseye', // Font Awesome equivalent of Target
      color: 'warning',
    },
    {
      id: 4,
      title: 'Eliminate Pain, Maximize Playtime',
      description:
        'Advanced methodology, steps, monitoring, and comprehensive care to keep you active and pain-free.',
      icon: 'fas fa-heart', // Font Awesome equivalent of Heart
      color: 'info',
    },
    {
      id: 5,
      title: 'Future-Proof Your Career',
      description:
        'Gain the knowledge and tools to prevent injuries and sustain long-term career success through expert guidance.',
      icon: 'fas fa-shield-alt', // Font Awesome equivalent of Shield
      color: 'secondary',
    },
  ];
  benefitsSignal = toSignal(this._ourBenefitsService.getAllBenefits(), {
    initialValue: [],
  });

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourBenefitsService: OurBenefitsService
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
