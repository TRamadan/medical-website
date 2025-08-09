import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-methodology-section',
  templateUrl: './methodology-section.component.html',
  styleUrls: ['./methodology-section.component.css'],
})
export class MethodologySectionComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
