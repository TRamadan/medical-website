import { environment } from './../../../../../environments/environment.development';
import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  ChangeDetectorRef,
  inject,
  ViewChild,
  ElementRef,
  HostListener
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
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  public currentIndex = 0;
  public translateX = 0;
  public readonly urlForImg = environment.imgUrl;
  
  // Dynamic widths
  public itemWidth = 0; // inactive width + gap
  public activeWidth = 0;
  public inactiveWidth = 0;
  private gap = 30; // Check your CSS .owl-stage gap
  
  private visibleItems = 3;
  private autoSlideInterval: any;
  private languageSubscription!: Subscription;

  eliteSuperStarsSignal = signal<any[]>([]);
  loading = true;
  currentLang = 'en';

  constructor(
    public translationService: TranslationService,
    private _languageService: LanguageService,
    private _ourSuperStars: SuperstarsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.startAutoSlide();
    this.getSuperStarAthlete();
    this.languageSubscription =
      this._languageService.currentLanguage$.subscribe((lang) => {
        this.currentLang = lang;
        setTimeout(() => this.updateTranslateX(), 100); 
      });
  }

  ngAfterViewInit() {
    // Initial calculation
    this.calculateWidths();
    this.cdr.detectChanges();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateWidths();
    this.updateTranslateX();
  }

  calculateWidths() {
    if (!this.carouselContainer) return;

    const containerWidth = this.carouselContainer.nativeElement.offsetWidth;
    const isMobileOrTablet = window.innerWidth < 992; // Tablet & Mobile

    if (isMobileOrTablet) {
       this.gap = 20; 
       this.visibleItems = 1;
       
       // Single item view matches container width
       // Subtract padding if existing in CSS container
       // Assuming container is full width relative to carousel wrapper
       
       this.itemWidth = containerWidth + this.gap; // Include gap for scroll step
       this.activeWidth = containerWidth;
       this.inactiveWidth = containerWidth;
       return; 
    }

    // DESKTOP LOGIC (>= 992px)
    this.gap = 30;
    this.visibleItems = 3;

    // We want: 1 active + 2 inactive + gaps to fit in container
    // Formular: activeWidth + 2 * inactiveWidth + (visibleItems - 1) * gap <= containerWidth
    // Let activeWidth approx 1.5 * inactiveWidth
    // 1.5*w + 2*w + 2*gap = containerWidth
    // 3.5*w = containerWidth - 2*gap
    
    // Safety padding
    const padding = 40; 
    const availableWidth = containerWidth - ((this.visibleItems - 1) * this.gap) - padding;

    this.inactiveWidth = Math.floor(availableWidth / 3.5);
    this.activeWidth = Math.floor(this.inactiveWidth * 1.5);
    
    this.itemWidth = this.inactiveWidth + this.gap;
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
    // this.updateTranslateX(); // selectSuperStar calls it
    this.selectSuperStar(superstars[index].id);
  }

  updateTranslateX(): void {
    const superstars = this.eliteSuperStarsSignal();
    if (!superstars || superstars.length === 0) return;

    // Use dynamic itemWidth if calculated, else fallback
    const effectiveItemWidth = this.itemWidth || 350; 
    
    // Ensure we don't scroll past the end
    // Logic: If we are at index i, translation is i * itemWidth
    // But we need to center the viewport? 
    // The current template transforms .owl-stage. 
    // Usually: translateX = -currentIndex * itemWidth. 
    // But since the active item is wider, standard loop translation might be tricky?
    // Actually, if we translate by (inactiveWidth + gap), the next item moves into "inactive" slot 1.
    // The visual active expansion happens via CSS/width change.
    
    let translation = this.currentIndex * effectiveItemWidth;
    
    // Adjust logic if needed for boundaries
    // The original code had: (length - visible) * width.
    // If we have 10 items, visible 3. Max index to start showing 3 items is 7.
    // So max index = length - visibleItems (roughly).
    
    // However, since we resize the *Active* item, simply preserving the 'left' alignment 
    // of the start of the visible window (index to index+2) works if 
    // the expansion happens to the right? 
    // Flexbox: items align left. Active item grows. 
    // If Item 0 is active: Width is Big, Small, Small.
    // If Item 1 is active: We translate left by (Small+Gap). 
    // Now visible: Item 1 (Big), Item 2 (Small), Item 3 (Small).
    // Yes, simple translation by (InactiveWidth + Gap) works!

    // Clamp translation?
    // If we simply loop or stop? 
    // Original code:
    // const maxTranslateX = (superstars.length - this.visibleItems) * this.itemWidth;
    // translation = Math.min(translation, maxTranslateX);
    
    // Let's keep the clamp but careful with visibleItems count
    if (superstars.length > this.visibleItems) {
         // Only clamp if not looping / simpler logic
         // But allow full scroll
    }

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
    // If we loop back to 0, translation becomes 0.
    
    this.selectSuperStar(superstars[this.currentIndex].id);
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds
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
          
          setTimeout(() => {
             this.calculateWidths();
             this.updateTranslateX();
             this.cdr.detectChanges();
          }, 0);
        },
        error: (err: any) => {
        },
      });
  }
}
