import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-success-videos',
  standalone: true,
  templateUrl: './success-videos.component.html',
  styleUrls: ['./success-videos.component.css'],
})
export class SuccessVideosComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
