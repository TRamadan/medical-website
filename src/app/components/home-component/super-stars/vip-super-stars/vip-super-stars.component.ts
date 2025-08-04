import { Component, HostListener, OnInit } from '@angular/core';

interface SlideData {
  id: number;
  name: string;
  title: string;
  description: string;
  achievement?: string;
  imageUrl: string;
}
@Component({
  selector: 'app-vip-super-stars',
  standalone: true,
  templateUrl: './vip-super-stars.component.html',
  styleUrls: ['./vip-super-stars.component.css'],
})
export class VipSuperStarsComponent implements OnInit {
  currentSlide: number = 0;
  totalSlides: number = 4;
  isAutoPlaying: boolean = true;
  autoPlayInterval: any = null;
  autoPlayDelay: number = 50000;

  slides: SlideData[] = [
    {
      id: 1,
      name: 'Nada Magdy ',
      title: 'Fin swimmer',
      achievement: 'World Medalist',
      description:
        'To provide accessible, personalized, and evidence-based rehabilitation services that empower individuals to achieve optimal physical function and return to their active lifestyle.',
      imageUrl: '../../../../../assets/athelete1.jpeg',
    },
    {
      id: 2,
      name: 'Mohamed Samir',
      title: 'Handball',
      achievement: '',
      description:
        'Dedicated to helping patients recover from injuries and improve their quality of life through innovative treatment approaches and compassionate care.',
      imageUrl: '../../../../../assets/superstars-athelets2.jpeg',
    },
    {
      id: 3,
      name: 'Mike Chen',
      title: 'Fitness Coach',
      achievement: '',
      description: 'World Medalist.',
      imageUrl: 'https://via.placeholder.com/200x200/4facfe/ffffff?text=Mike',
    },
    {
      id: 4,
      name: 'Lisa Martinez',
      title: 'Wellness Specialist',
      achievement: '',
      description:
        'Committed to promoting holistic wellness through mindfulness, stress management, and lifestyle coaching to help individuals achieve balance and vitality.',
      imageUrl: 'https://via.placeholder.com/200x200/43e97b/ffffff?text=Lisa',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.totalSlides = this.slides.length;
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.pauseAutoPlay();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  getSliderTransform(): string {
    const translateX = -this.currentSlide * 100;
    return `translateX(${translateX}%)`;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startAutoPlay(): void {
    if (this.isAutoPlaying) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    }
  }

  pauseAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resumeAutoPlay(): void {
    if (this.isAutoPlaying && !this.autoPlayInterval) {
      this.startAutoPlay();
    }
  }

  onImageError(event: any, slide: SlideData): void {
    event.target.style.display = 'none';
    const iconElement = event.target.nextElementSibling;
    if (iconElement) {
      iconElement.style.display = 'flex';
    }
  }

  getSlideGradient(index: number): string {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    ];
    return gradients[index % gradients.length];
  }

  // Touch events
  private startX: number = 0;
  private endX: number = 0;

  onTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
    this.pauseAutoPlay();
  }

  onTouchEnd(event: TouchEvent): void {
    this.endX = event.changedTouches[0].clientX;
    const diff = this.startX - this.endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
    this.resumeAutoPlay();
  }
}
