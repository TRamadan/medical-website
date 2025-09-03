import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../../services/translation.service';
import { LanguageService } from '../../../../services/language.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SuccessStories } from '../models/success-stories';

@Component({
  selector: 'app-success-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-videos.component.html',
  styleUrls: ['./success-videos.component.css'],
})
export class SuccessVideosComponent implements OnInit {
  private languageSubscription?: Subscription;

  selectedMovie: SuccessStories = {
    id: 1,
    titleEn: 'Video test',
    titleAr: 'اختبار الفيديو',
    descriptionEn:
      'Adventure awaits as Lara Croft embarks on her most dangerous journey yet.',
    descriptionAr:
      'المغامرة تنتظر بينما تنطلق لارا كروفت في رحلتها الأكثر خطورة حتى الآن.',
    date: '15 Mar 2018',
    isSuccessStoryVideo: true,
    image: 'https://img.youtube.com/vi/8ndhidEmUbI/maxresdefault.jpg',
    name: 'Lara Croft',
    personDescriptionEn: 'Adventurous archaeologist and tomb raider',
    personDescriptionAr: 'عالمة آثار مغامرة وناهبة مقابر',
    videoUrl: 'https://www.youtube.com/watch?v=8ndhidEmUbI',
  };

  isPlaying = false;
  safeVideoUrl: SafeResourceUrl | null = null;

  videoSuccessStories: SuccessStories[] = [
    {
      id: 1,
      titleEn: 'Recovery Journey: From Addiction to Hope',
      titleAr: 'رحلة التعافي: من الإدمان إلى الأمل',
      descriptionEn:
        "Follow Sarah's inspiring 18-month journey from addiction to complete recovery and rebuilding her life with family support.",
      descriptionAr:
        'تابع رحلة سارة الملهمة خلال 18 شهرًا من الإدمان إلى التعافي الكامل وإعادة بناء حياتها بدعم الأسرة.',
      date: '2024-11-15',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/TgF_6TAwqHs/maxresdefault.jpg',
      name: 'Sarah Johnson',
      videoUrl: 'https://www.youtube.com/watch?v=TgF_6TAwqHs',
    },
    {
      id: 2,
      titleEn: "Breaking the Cycle: A Father's Transformation",
      titleAr: 'كسر الدورة: تحول الأب',
      descriptionEn:
        "Watch Michael's powerful story of overcoming 15 years of substance abuse and becoming the father his children deserve.",
      descriptionAr:
        'شاهد قصة مايكل القوية في التغلب على 15 عامًا من تعاطي المواد المخدرة وأن يصبح الأب الذي يستحقه أطفاله.',
      date: '2024-10-28',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/ao8L-0nSYzg/maxresdefault.jpg',
      name: 'Michael Rodriguez',
      videoUrl: 'https://www.youtube.com/watch?v=ao8L-0nSYzg',
    },
    {
      id: 3,
      titleEn: 'Physical Rehabilitation: Walking Again',
      titleAr: 'إعادة التأهيل الجسدي: المشي مرة أخرى',
      descriptionEn:
        "Lisa's remarkable recovery from a spinal injury through intensive physical therapy and determination.",
      descriptionAr:
        'تعافي ليزا الرائع من إصابة في العمود الفقري من خلال العلاج الطبيعي المكثف والتصميم.',
      date: '2024-12-05',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/WxlkjqPc5R0/maxresdefault.jpg',
      name: 'Lisa Chen',
      videoUrl: 'https://www.youtube.com/watch?v=WxlkjqPc5R0',
    },
    {
      id: 4,
      titleEn: 'Mental Health Recovery: Finding Inner Peace',
      titleAr: 'التعافي من الصحة النفسية: العثور على السلام الداخلي',
      descriptionEn:
        'David shares his journey through depression and anxiety, finding healing through therapy and community support.',
      descriptionAr:
        'يشارك ديفيد رحلته خلال الاكتئاب والقلق، ووجد الشفاء من خلال العلاج ودعم المجتمع.',
      date: '2024-09-20',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/bQThhkozNQs/maxresdefault.jpg',
      name: 'David Thompson',
      videoUrl: 'https://www.youtube.com/watch?v=bQThhkozNQs',
    },
    {
      id: 5,
      titleEn: 'Youth Rehabilitation: Second Chances',
      titleAr: 'إعادة تأهيل الشباب: فرص ثانية',
      descriptionEn:
        'Young adults share their stories of transformation through rehabilitation programs and finding new purpose.',
      descriptionAr:
        'يشارك الشباب قصص تحولهم من خلال برامج إعادة التأهيل والعثور على هدف جديد.',
      date: '2024-08-12',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/Hzgzim5m7oU/maxresdefault.jpg',
      name: 'Youth Group',
      videoUrl: 'https://www.youtube.com/watch?v=Hzgzim5m7oU',
    },
    {
      id: 6,
      titleEn: 'Family Healing: Rebuilding Trust',
      titleAr: 'شفاء الأسرة: إعادة بناء الثقة',
      descriptionEn:
        "A family's journey of healing together after addiction tore them apart, learning to trust and love again.",
      descriptionAr:
        'رحلة شفاء عائلة معًا بعد أن مزق الإدمان علاقتهم، وتعلم الثقة والحب مرة أخرى.',
      date: '2024-07-30',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/QOAz1McN6nE/maxresdefault.jpg',
      name: 'The Martinez Family',
      videoUrl: 'https://www.youtube.com/watch?v=QOAz1McN6nE',
    },
    {
      id: 7,
      titleEn: "Overcoming Trauma: A Soldier's Story",
      titleAr: 'التغلب على الصدمة: قصة جندي',
      descriptionEn:
        'Veteran John shares his battle with PTSD and how rehabilitation helped him reclaim his life and purpose.',
      descriptionAr:
        'يشارك المحارب المخضرم جون معركته مع اضطراب ما بعد الصدمة وكيف ساعدته إعادة التأهيل في استعادة حياته وهدفه.',
      date: '2024-11-03',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/WIlPFRsseQ8/maxresdefault.jpg',
      name: 'John Williams',
      videoUrl: 'https://www.youtube.com/watch?v=WIlPFRsseQ8',
    },
    {
      id: 8,
      titleEn: 'Stroke Recovery: Regaining Independence',
      titleAr: 'التعافي من السكتة الدماغية: استعادة الاستقلالية',
      descriptionEn:
        "Margaret's inspiring recovery from stroke through speech therapy, physical rehabilitation, and unwavering determination.",
      descriptionAr:
        'تعافي مارغريت الملهم من السكتة الدماغية من خلال علاج النطق وإعادة التأهيل الجسدي والتصميم الثابت.',
      date: '2024-06-18',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/P2AUat93a8Q/maxresdefault.jpg',
      name: 'Margaret Davis',
      videoUrl: 'https://www.youtube.com/watch?v=P2AUat93a8Q',
    },
    {
      id: 9,
      titleEn: 'Addiction Recovery: One Day at a Time',
      titleAr: 'التعافي من الإدمان: يوم واحد في كل مرة',
      descriptionEn:
        'Multiple stories of individuals who found strength in community and professional support to overcome addiction.',
      descriptionAr:
        'قصص متعددة لأفراد وجدوا القوة في المجتمع والدعم المهني للتغلب على الإدمان.',
      date: '2024-05-25',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/b2emgrRXgos/maxresdefault.jpg',
      name: 'Recovery Community',
      videoUrl: 'https://www.youtube.com/watch?v=b2emgrRXgos',
    },
    {
      id: 10,
      titleEn: 'Brain Injury Recovery: Relearning Life',
      titleAr: 'التعافي من إصابة الدماغ: إعادة تعلم الحياة',
      descriptionEn:
        "Alex's journey of recovery from traumatic brain injury, relearning basic skills and finding new ways to thrive.",
      descriptionAr:
        'رحلة أليكس للتعافي من إصابة الدماغ الرضحية، وإعادة تعلم المهارات الأساسية وإيجاد طرق جديدة للازدهار.',
      date: '2024-04-10',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/Vhh_GeBPOhs/maxresdefault.jpg',
      name: 'Alex Rivera',
      videoUrl: 'https://www.youtube.com/watch?v=Vhh_GeBPOhs',
    },
    {
      id: 11,
      titleEn: 'Therapy Success: Healing Through Art',
      titleAr: 'نجاح العلاج: الشفاء من خلال الفن',
      descriptionEn:
        "Discover how art therapy transformed Emma's recovery process and helped her express emotions she couldn't put into words.",
      descriptionAr:
        'اكتشف كيف حول العلاج بالفن عملية تعافي إيما وساعدها على التعبير عن المشاعر التي لم تستطع وضعها في كلمات.',
      date: '2024-03-22',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/lEV5AFFcZ-s/maxresdefault.jpg',
      name: 'Emma Foster',
      videoUrl: 'https://www.youtube.com/watch?v=lEV5AFFcZ-s',
    },
    {
      id: 12,
      titleEn: 'Workplace Rehabilitation: Return to Purpose',
      titleAr: 'إعادة التأهيل المهني: العودة إلى الهدف',
      descriptionEn:
        'Professional rehabilitation program helping individuals transition back to meaningful employment after recovery.',
      descriptionAr:
        'برنامج إعادة التأهيل المهني يساعد الأفراد على الانتقال إلى عمل هادف بعد التعافي.',
      date: '2024-02-14',
      isSuccessStoryVideo: true,
      image: 'https://img.youtube.com/vi/sTJ7AzBIJoI/maxresdefault.jpg',
      name: 'Professional Team',
      personDescriptionEn: 'Workplace Rehabilitation Specialists',
      personDescriptionAr: 'اختصاصيو إعادة التأهيل المهني',
      videoUrl: 'https://www.youtube.com/watch?v=sTJ7AzBIJoI',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animateCards();
    }, 100);
  }

  ngOnDestroy(): void {
    // Clean up if needed
  }

  playVideo(): void {
    if (!this.isPlaying) {
      const videoId = this.extractVideoId(this.selectedMovie.videoUrl ?? '');
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
    const movie = this.videoSuccessStories.find(
      (m: SuccessStories) => m.id === videoId
    );
    if (movie) {
      this.selectedMovie = movie;
      this.stopVideo(); // Stop current video when switching
    }
  }

  private extractVideoId(url: string): string | null {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
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
