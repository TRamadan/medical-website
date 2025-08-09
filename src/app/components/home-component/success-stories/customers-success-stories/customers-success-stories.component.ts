import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';

@Component({
  standalone: true,
  selector: 'app-customers-success-stories',
  templateUrl: './customers-success-stories.component.html',
  styleUrls: ['./customers-success-stories.component.css'],
})
export class CustomersSuccessStoriesComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
