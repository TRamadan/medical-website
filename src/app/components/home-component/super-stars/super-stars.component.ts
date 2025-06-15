import { Component, HostListener, OnInit } from '@angular/core';
export interface Superstar {
  id: number;
  name: string;
  sport: string;
  achievement: string;
  testimonial: string;
  image: string;
}

@Component({
  standalone: true,
  imports: [],
  selector: 'app-super-stars',
  templateUrl: './super-stars.component.html',
  styleUrls: ['./super-stars.component.css'],
})
export class SuperStarsComponent implements OnInit {
  superstars: Superstar[] = [
    {
      id: 1,
      name: 'Lionel Messi',
      sport: 'Football',
      achievement: "8x Ballon d'Or Winner",
      testimonial: 'Dreams come true with hard work and dedication.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Serena Williams',
      sport: 'Tennis',
      achievement: '23x Grand Slam Champion',
      testimonial: 'You have to believe in yourself when no one else does.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'LeBron James',
      sport: 'Basketball',
      achievement: '4x NBA Champion',
      testimonial: 'Success is not given, it is earned.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Usain Bolt',
      sport: 'Athletics',
      achievement: '8x Olympic Gold Medalist',
      testimonial: 'Limits are meant to be broken.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Simone Biles',
      sport: 'Gymnastics',
      achievement: '7x Olympic Medalist',
      testimonial:
        'Push yourself because no one else is going to do it for you.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    },
  ];

  currentSlide = 0;
  isHovered = false;
  private intervalId?: number;
  itemsPerSlide = 3;

  ngOnInit(): void {
    this.updateItemsPerSlide();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
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
