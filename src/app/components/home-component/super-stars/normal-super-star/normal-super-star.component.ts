import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { TranslationService } from '../../../../services/translation.service';
import { Subscription } from 'rxjs';
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
})
export class NormalSuperStarComponent implements OnInit {
  private languageSubscription?: Subscription;

  superstars: Superstar[] = [
    {
      id: 1,
      key: 'messi',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      key: 'serena',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      key: 'lebron',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      key: 'usain',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      key: 'simone',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
  ];

  currentSlide = 0;
  isHovered = false;
  private intervalId?: number;
  itemsPerSlide = 3;
  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.updateItemsPerSlide();
    this.startAutoSlide();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        // Component will re-render automatically
      }
    );
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
      }, 3000);
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
    this.currentSlide = (this.currentSlide + 1) % this.superstars.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.superstars.length) % this.superstars.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getVisibleSlides(): Superstar[] {
    const slides: Superstar[] = [];
    for (let i = 0; i < this.itemsPerSlide; i++) {
      const index = (this.currentSlide + i) % this.superstars.length;
      slides.push(this.superstars[index]);
    }
    return slides;
  }

  getSlideIndex(slide: Superstar, position: number): number {
    return (this.currentSlide + position) % this.superstars.length;
  }
}
