import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';

@Component({
  selector: 'app-our-benefits',
  standalone: true,
  templateUrl: './our-benefits.component.html',
  styleUrls: ['./our-benefits.component.css'],
  imports: [TitleComponentComponent],
})
export class OurBenefitsComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
