import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { Education } from '../../educational-videos/models/education';
import { environment } from '../../../../../environments/environment.development';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-articles-videos',
  standalone: true,
  imports: [FormsModule, TitleComponentComponent],
  templateUrl: './articles-videos.component.html',
  styleUrls: ['./articles-videos.component.css'],
})
export class ArticlesVideosComponent implements OnInit {
  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;

  @Input() itemState: number = 0;
  @Input() articles: Education[] = [];
  @Input() videos: Education[] = [];
  public readonly fetchedImgUrl = environment.imgUrl;

  searchText: string = '';
  selectedItem: Education | null = {};

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['itemState']) {
      this.updateSelectedContent();
      return;
    }

    if (changes['articles'] && this.itemState === 1) {
      this.articles = changes['articles'].currentValue || [];
      if (this.articles.length) {
        this.selectedItem = this.articles[0];
      }
    }

    if (changes['videos'] && this.itemState === 3) {
      this.videos = changes['videos'].currentValue || [];
      if (this.videos.length) {
        this.selectedItem = this.videos[0];
      }
    }
  }

  private updateSelectedContent() {
    if (this.itemState === 1) {
      // Show articles
      if (this.articles.length) {
        this.selectedItem = this.articles[0];
      } else {
        this.selectedItem = null;
      }
    } else {
      // Show videos
      if (this.videos.length) {
        this.selectedItem = this.videos[0];
      } else {
        this.selectedItem = null;
      }
    }
  }

  selectItem(item: any): void {
    this.selectedItem = item;
  }

  isItemSelected(item: any): boolean {
    return this.selectedItem?.id === item.id;
  }
}
