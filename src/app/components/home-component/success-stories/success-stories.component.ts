import { Component, OnInit } from '@angular/core';
import { SuccessVideosComponent } from './success-videos/success-videos.component';
import { CustomersSuccessStoriesComponent } from './customers-success-stories/customers-success-stories.component';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
@Component({
  standalone: true,
  imports: [SuccessVideosComponent, CustomersSuccessStoriesComponent],
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css'],
})
export class SuccessStoriesComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
