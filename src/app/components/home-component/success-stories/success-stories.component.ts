import { Component, effect, Input, OnInit } from '@angular/core';
import { SuccessVideosComponent } from './success-videos/success-videos.component';
import { CustomersSuccessStoriesComponent } from './customers-success-stories/customers-success-stories.component';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { SuccessStoriesService } from './services/successStories.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  standalone: true,
  imports: [
    SuccessVideosComponent,
    CustomersSuccessStoriesComponent,
    TitleComponentComponent,
  ],
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css'],
})
export class SuccessStoriesComponent implements OnInit {
  private languageSubscription?: Subscription;
  videos: any[] = [];
  successStories: any[] = [];

  videosAndSuccessStories = toSignal(
    this._ourSuccessStoriesService.getAllSuccessStories(),
    { initialValue: [] }
  );

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private _ourSuccessStoriesService: SuccessStoriesService
  ) {
    effect(() => {
      const stories = this.videosAndSuccessStories();
      this.videos = stories.filter((item) => item.isSuccessStoryVideo == true);
      this.successStories = stories.filter(
        (item) => item.isSuccessStoryVideo == false
      );
    });
  }

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
