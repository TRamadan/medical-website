import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-educational-videos',
  templateUrl: './educational-videos.component.html',
  styleUrls: ['./educational-videos.component.css'],
})
export class EducationalVideosComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;

  videos: any[] = [
    {
      key: 'understandingInjury',
      thumbnail: 'https://placehold.co/600x400',
      duration: '5:30',
    },
    {
      key: 'recoveryExercises',
      thumbnail: 'https://placehold.co/600x400',
      duration: '8:45',
    },
    {
      key: 'painManagement',
      thumbnail: 'https://placehold.co/600x400',
      duration: '6:20',
    },
    {
      key: 'preventingReinjury',
      thumbnail: 'https://placehold.co/600x400',
      duration: '7:15',
    },
    {
      key: 'nutritionForRecovery',
      thumbnail: 'https://placehold.co/600x400',
      duration: '9:10',
    },
    {
      key: 'mentalHealth',
      thumbnail: 'https://placehold.co/600x400',
      duration: '4:50',
    },
    {
      key: 'returnToActivity',
      thumbnail: 'https://placehold.co/600x400',
      duration: '6:35',
    },
    {
      key: 'sleepAndHealing',
      thumbnail: 'https://placehold.co/600x400',
      duration: '5:45',
    },
  ];
  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        // The component will automatically re-render with the new language.
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  watchVideo(selectedVideo: any, index: any): void {}

  viewAllContent(): void {}
}
