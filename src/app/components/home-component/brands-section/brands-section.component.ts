import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-brands-section',
  standalone: true,
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.css'],
})
export class BrandsSectionComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
