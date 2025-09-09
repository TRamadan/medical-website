import {
  Component,
  HostListener,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { toSignal } from '@angular/core/rxjs-interop';
import { SuperstarsService } from '../services/superstars.service';
import { SuperstarAthelete } from '../models/superstars';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-vip-super-stars',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './vip-super-stars.component.html',
  styleUrls: ['./vip-super-stars.component.css'],
})
export class VipSuperStarsComponent implements OnInit {
  currentIndex = 0;
  translateX = 0;
  public readonly urlForImg = environment.imgUrl;
  autoSlideInterval: any;
  itemWidth = 350;
  visibleItems = 3;
  eliteSuperStarsSignal: WritableSignal<SuperstarAthelete[]> = signal<
    SuperstarAthelete[]
  >([]);

  constructor(
    public translationService: TranslationService,
    private _ourSuperStars: SuperstarsService
  ) {}

  ngOnInit(): void {
    this.startAutoSlide();
    this.updateTranslateX();
    this.getSuperStarAthlete();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  selectSuperStar(vipSuperStarId: any): void {
    this.eliteSuperStarsSignal.update((eliteSuperStars) =>
      eliteSuperStars.map((vipSuperStar) => ({
        ...vipSuperStar,
        active: vipSuperStar.id === vipSuperStarId,
      }))
    );

    const gameIndex = this.eliteSuperStarsSignal().findIndex(
      (vipSuperStar) => vipSuperStar.id === vipSuperStarId
    );

    if (gameIndex !== -1) {
      this.currentIndex = gameIndex;
      this.updateTranslateX();
      this.restartAutoSlide();
    }
  }

  goToSlide(index: number): void {
    const eliteSuperStars = this.eliteSuperStarsSignal();
    if (!eliteSuperStars || !eliteSuperStars[index]) return;

    this.currentIndex = index;
    this.updateTranslateX();
    this.selectSuperStar(eliteSuperStars[index].id);
    this.restartAutoSlide();
  }

  private updateTranslateX(): void {
    const eliteSuperStars = this.eliteSuperStarsSignal();
    if (!eliteSuperStars || eliteSuperStars.length === 0) return;

    const maxTranslate =
      (eliteSuperStars.length - this.visibleItems) * this.itemWidth;
    this.translateX =
      Math.min(this.currentIndex * this.itemWidth, maxTranslate) * -1;
  }

  private nextSlide(): void {
    const vipSuperStars = this.eliteSuperStarsSignal();
    if (!vipSuperStars || vipSuperStars.length === 0) return;

    this.currentIndex = (this.currentIndex + 1) % vipSuperStars.length;
    this.updateTranslateX();
    this.selectSuperStar(vipSuperStars[this.currentIndex].id);
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getSuperStarAthlete(): void {
    this._ourSuperStars.getAllSuperStars().subscribe({
      next: (res: SuperstarAthelete[]) => {
        const mapped = res.map(
          (eliteSuperStar: SuperstarAthelete, index: number) => ({
            ...eliteSuperStar,
            backgroundImage: this.urlForImg + eliteSuperStar.image,
            active: index === 0,
          })
        );

        this.eliteSuperStarsSignal.set(mapped);
      },
      error: (error: any) => {},
    });
  }
}
