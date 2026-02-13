import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SuccessStories } from '../models/success-stories';
import { toSignal } from '@angular/core/rxjs-interop';
import { SuccessStoriesService } from '../services/successStories.service';

@Component({
  selector: 'app-success-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-videos.component.html',
  styleUrls: ['./success-videos.component.css'],
})
export class SuccessVideosComponent implements OnInit, OnChanges {
  @Input() videos: any[] = [];

  currentLang: 'en' | 'ar' = 'en';

  selectedVideo: SuccessStories = {};

  languageSubscription?: Subscription;

  isPlaying = false;
  safeVideoUrl: SafeResourceUrl | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.animateCards();
    }, 100);
  }

  constructor(
    private sanitizer: DomSanitizer,
    public languageService: LanguageService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videos'] && this.videos.length > 0) {
      this.selectedVideo = this.videos[0];
      this.languageSubscription =
        this.languageService.currentLanguage$.subscribe((lang: 'en' | 'ar') => {
          this.currentLang = lang;
        });
    }
  }

  ngOnDestroy(): void {
    // Clean up if needed
  }

  playVideo(): void {
    if (!this.isPlaying) {
      const videoId = this.extractVideoId(this.selectedVideo.videoUrl ?? '');
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        this.safeVideoUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        this.isPlaying = true;
      }
    } else {
      this.stopVideo();
    }
  }

  stopVideo(): void {
    this.isPlaying = false;
    this.safeVideoUrl = null;
  }

  selectContent(videoId: any): void {
    const movie = this.videos.find((m: SuccessStories) => m.id === videoId);
    if (movie) {
      this.selectedVideo = movie;
      this.stopVideo(); // Stop current video when switching
    }
  }

  private extractVideoId(url: string): string | null {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  getThumbnailStyle(video: SuccessStories): any {
    return {
      'background-image': `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${video.image}')`,
      'background-size': 'cover',
      'background-position': 'center',
    };
  }

  getBackgroundStyle(gradient: string): any {
    return {
      background: gradient,
    };
  }

  // getMainThumbnailStyle(): any {
  //   if (this.isPlaying) {
  //     return this.getBackgroundStyle(this.selectedMovie.gradient);
  //   }
  //   return {
  //     'background-image': `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${this.selectedMovie.thumbnailUrl}')`,
  //     'background-size': 'cover',
  //     'background-position': 'center',
  //   };
  // }

  private animateCards(): void {
    const cards = document.querySelectorAll('.animate-on-scroll');
    cards.forEach((card, index) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
      }, index * 200);
    });
  }
}
