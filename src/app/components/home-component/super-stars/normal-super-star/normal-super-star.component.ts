import {
  Component,
  HostListener,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { TranslationService } from '../../../../services/translation.service';
import { Subscription, finalize } from 'rxjs';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { SuperstarAthelete } from '../models/superstars';
import { SuperstarsService } from '../services/superstars.service';
import { environment } from '../../../../../environments/environment.development';
import { LoadingSkeletonComponent } from '../../../shared-ui/loading-skeleton/loading-skeleton.component';
export interface Superstar {
  id: number;
  key: string;
  image: string;
}
@Component({
  selector: 'app-normal-super-star',
  standalone: true,
  templateUrl: './normal-super-star.component.html',
  styleUrls: ['./normal-super-star.component.css'],
  imports: [TitleComponentComponent, LoadingSkeletonComponent],
})
export class NormalSuperStarComponent implements OnInit {
  private languageSubscription?: Subscription;
  currentLang: 'en' | 'ar' = 'en';
  loading: boolean = true;

  public readonly imgUrl = environment.imgUrl;

  normalSuperStarsSignal: WritableSignal<SuperstarAthelete[]> = signal<
    SuperstarAthelete[]
  >([]);

  currentSlide = 0;
  isHovered = false;
  private intervalId?: number;
  itemsPerSlide = 3;
  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private _ourSuperStars: SuperstarsService
  ) {}

  ngOnInit() {
    this.updateItemsPerSlide();
    this.startAutoSlide();
    this.getSuperStarAthlete();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
  }

  getSuperStarAthlete(): void {
    this._ourSuperStars
      .getAllSuperStars()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res: SuperstarAthelete[]) => {
          const mapped = res.filter(
            (athelete: any) => athelete.isElite === false
          );
          this.normalSuperStarsSignal.set(mapped);
        },
        error: (error: any) => {
          console.error('Error fetching super stars', error);
        },
      });
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateItemsPerSlide();
  }

  private updateItemsPerSlide(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsPerSlide = 1;
    } else if (width < 992) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }
  }

  private startAutoSlide(): void {
    if (!this.isHovered) {
      this.intervalId = window.setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }

  private stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  onMouseEnter(): void {
    this.isHovered = true;
    this.stopAutoSlide();
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.startAutoSlide();
  }

  nextSlide(): void {
    let normalSuperStars = this.normalSuperStarsSignal();
    this.currentSlide = (this.currentSlide + 1) % normalSuperStars.length;
  }

  prevSlide(): void {
    let normalSuperStars = this.normalSuperStarsSignal();

    this.currentSlide =
      (this.currentSlide - 1 + normalSuperStars.length) %
      normalSuperStars.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getVisibleSlides(): SuperstarAthelete[] {
    if (this.loading) {
      const skeletons = Array(this.itemsPerSlide).fill(null);
      return skeletons;
    }
    const slides: SuperstarAthelete[] = [];
    const superstars = this.normalSuperStarsSignal();
    for (let i = 0; i < this.itemsPerSlide; i++) {
      const index = (this.currentSlide + i) % superstars.length;
      slides.push(superstars[index]);
    }
    return slides;
  }

  getSlideIndex(slide: SuperstarAthelete, position: number): number {
    const superstars = this.normalSuperStarsSignal();
    return (this.currentSlide + position) % superstars.length;
  }
}
