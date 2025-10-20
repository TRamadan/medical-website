import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { Education } from '../../educational-videos/models/education';
import { environment } from '../../../../../environments/environment.development';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-articles-videos',
  standalone: true, // Make sure to import CommonModule if you use ngIf/ngFor with the old syntax
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

  showShareMenu = false;
  selectedItemId: string | number | null = null;

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
      } else {
        this.selectedItem = null;
      }
    }

    if (changes['videos'] && this.itemState === 3) {
      this.videos = changes['videos'].currentValue || [];
      if (this.videos.length) {
        this.selectedItem = this.videos[0];
      } else {
        this.selectedItem = null;
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

  toggleShareMenu(item: any) {
    if (this.selectedItemId === item.id && this.showShareMenu) {
      this.showShareMenu = false;
      this.selectedItemId = null;
    } else {
      this.showShareMenu = true;
      this.selectedItemId = item.id;
    }
  }

  share(platform: 'whatsapp' | 'facebook' | 'copy' | 'native', item: any) {
    if (!item) return;

    const title =
      (this.currentLang === 'en' ? item.titleEn : item.title)?.trim() ||
      'Check this out!';
    // Construct the URL based on the item type and ID
    const itemType = this.itemState === 1 ? 'articles' : 'videos';
    const url = `${window.location.origin}/education/${itemType}/${item.id}`;

    switch (platform) {
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + `\n` + url)}`,
          '_blank'
        );
        break;
      case 'facebook':
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        window.open(fbUrl, '_blank', 'width=600,height=400');
        break;
      case 'copy':
        navigator.clipboard
          .writeText(url)
          .then(() => alert('✅ Link copied to clipboard!'))
          .catch(() => alert('❌ Failed to copy link.'));
        break;
      case 'native':
        if (navigator.share) {
          navigator
            .share({
              title: title,
              text: title,
              url: url,
            })
            .catch((error) => console.warn('Share failed', error));
        } else {
          alert('Native sharing is not supported on this device.');
        }
        break;
    }
    this.showShareMenu = false;
  }
}
