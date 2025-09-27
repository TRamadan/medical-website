import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {
  Component,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
  signal,
  isDevMode,
} from '@angular/core';

import { Partners } from './models/partners';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PartnersService } from './services/partners.service';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule, CardModule, TitleComponentComponent],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.responsive.scss'],
})
export class OurPartnersComponent implements OnInit {
  private readonly LOGO_WIDTH = 230; // Logo + margins
  private readonly ANIMATION_SPEED = 0.7; // Pixels per frame
  private animationId: number | null = null;
  private readonly destroy$ = new Subject<void>();

  // Signals
  protected readonly translateX = signal<number>(0);
  protected readonly loading = signal<boolean>(true);
  protected readonly currentLang = signal<'en' | 'ar'>('ar');
  protected readonly logos = signal<{ id: number; src: string; alt: string }[]>(
    []
  );
  protected readonly allLogos = signal<
    { id: number; src: string; alt: string }[]
  >([]);
  protected readonly environment = environment;

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly _ourPartners: PartnersService
  ) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  private getCompanies(): void {
    this.loading.set(true);
    this._ourPartners
      .getAllPartners()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: any) => {
          if (data && data.length > 0) {
            const mappedLogos = data.map((company: any) => ({
              id: company.id,
              src: `${environment.imgUrl}${company.logo}`,
              alt: company.name,
            }));
            this.logos.set(mappedLogos);
          }
          this.allLogos.set([
            ...this.logos(),
            ...this.logos(),
            ...this.logos(),
          ]);
          this.loading.set(false);
          this.cdr.detectChanges();
          this.startAnimation();
        },
        error: (error: any) => {
          if (isDevMode()) {
            console.error('Error fetching companies:', error);
          }
          // Fallback to default logos if API fails
          this.loading.set(false);
          this.cdr.detectChanges();
          this.startAnimation();
        },
      });
  }

  private startAnimation(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    const animate = () => {
      this.translateX.update((value) => {
        const newValue = value - this.ANIMATION_SPEED;
        // Reset when the first set is completely off screen (seamless loop)
        const resetPoint = -(this.logos().length * this.LOGO_WIDTH);
        return newValue <= resetPoint ? 0 : newValue;
      });
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
