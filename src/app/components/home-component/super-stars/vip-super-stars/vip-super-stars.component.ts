import { environment } from './../../../../../environments/environment.development';
import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TranslationService } from '../../../../services/translation.service';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { SuperstarsService } from '../services/superstars.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-vip-super-stars',
  standalone: true,
  imports: [CommonModule, TitleComponentComponent],
  templateUrl: './vip-super-stars.component.html',
  styleUrls: ['./vip-super-stars.component.css'],
})
export class VipSuperStarsComponent implements OnInit, OnDestroy {
  public currentIndex = 0;
  public translateX = 0;
  public readonly urlForImg = environment.imgUrl;
  private itemWidth = 350;
  private visibleItems = 3;
  private autoSlideInterval: any;
  private languageSubscription!: Subscription;

  eliteSuperStarsSignal = signal<any[]>([]);
  loading = true;
  currentLang = 'en';

  constructor(
    public translationService: TranslationService,
    private _languageService: LanguageService,
    private _ourSuperStars: SuperstarsService
  ) {}

  ngOnInit(): void {
    this.startAutoSlide();
    this.getSuperStarAthlete();
    this.languageSubscription =
      this._languageService.currentLanguage$.subscribe((lang) => {
        this.currentLang = lang;
        this.updateTranslateX(); // Recalculate on language change
      });
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  selectSuperStar(id: number): void {
    this.eliteSuperStarsSignal.update((superstars) =>
      superstars.map((superstar) => ({
        ...superstar,
        active: superstar.id === id,
      }))
    );
    const newIndex = this.eliteSuperStarsSignal().findIndex(
      (superstar) => superstar.id === id
    );
    if (newIndex !== -1) {
      this.currentIndex = newIndex;
      this.updateTranslateX();
      this.restartAutoSlide();
    }
  }

  goToSlide(index: number): void {
    const superstars = this.eliteSuperStarsSignal();
    if (!superstars || !superstars[index]) return;

    this.currentIndex = index;
    this.updateTranslateX();
    this.selectSuperStar(superstars[index].id);
    this.restartAutoSlide();
  }

  updateTranslateX(): void {
    const superstars = this.eliteSuperStarsSignal();
    if (!superstars || superstars.length === 0) return;

    const maxTranslateX =
      (superstars.length - this.visibleItems) * this.itemWidth;
    let translation = Math.min(
      this.currentIndex * this.itemWidth,
      maxTranslateX
    );

    // Adjust for RTL
    if (this._languageService.isRTL()) {
      this.translateX = translation;
    } else {
      this.translateX = -translation;
    }
  }

  nextSlide(): void {
    const superstars = this.eliteSuperStarsSignal();
    if (!superstars || superstars.length === 0) return;

    this.currentIndex = (this.currentIndex + 1) % superstars.length;
    this.updateTranslateX();
    this.selectSuperStar(superstars[this.currentIndex].id);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 50000); // Increased interval for better UX
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getSuperStarAthlete(): void {
    this._ourSuperStars
      .getAllSuperStars()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res: any) => {
          const eliteSuperstars = res
            .map((superstar: any, index: number) => ({
              ...superstar,
              backgroundImage: this.urlForImg + superstar.image,
              active: index === 0,
            }))
            .filter((superstar: any) => superstar.isElite === true);
          this.eliteSuperStarsSignal.set(eliteSuperstars);
          this.updateTranslateX(); // Initial calculation
        },
        error: (err: any) => {
          console.error('Error fetching super stars', err);
        },
      });
  }
}
