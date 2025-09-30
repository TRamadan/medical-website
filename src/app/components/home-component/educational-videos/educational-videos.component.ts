import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';
import { LanguageService, Language } from '../../../services/language.service';
import { Subscription } from 'rxjs';

import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { TranslationService } from '../../../services/translation.service';
@Component({
  standalone: true,
  imports: [
    BadgeModule,
    CommonModule,
    FormsModule,
    TitleComponentComponent,
    SpeedDialModule,
    TooltipModule,
  ],
  selector: 'app-educational-videos',
  templateUrl: './educational-videos.component.html',
  styleUrls: ['./educational-videos.component.css'],
})
export class EducationalVideosComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'en';
  private languageSubscription?: Subscription;

  categories: any[] = [
    { id: 'all', name_en: 'All Articles', name_ar: 'كل المقالات', count: 12 },
    {
      id: 'physical-therapy',
      name_en: 'Physical Therapy',
      name_ar: 'علاج طبيعي',
      count: 4,
    },
    {
      id: 'mental-health',
      name_en: 'Mental Health',
      name_ar: 'صحة نفسية',
      count: 3,
    },
    {
      id: 'occupational-therapy',
      name_en: 'Occupational Therapy',
      name_ar: 'علاج وظيفي',
      count: 3,
    },
    {
      id: 'rehabilitation',
      name_en: 'Rehabilitation',
      name_ar: 'إعادة تأهيل',
      count: 2,
    },
  ];

  articles: any[] = [];
  videos: any[] = [];

  activeCategory: string = 'all';
  activeTab: string = 'articles';
  searchQuery: string = '';

  constructor(
    private languageService: LanguageService,
    public translateService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
      }
    );
    this.articles = [
      {
        id: '1',
        type: 'article',
        title: 'Evidence-Based Approaches to Physical Rehabilitation',
        titleAr: 'الأساليب القائمة على الأدلة في إعادة التأهيل البدني',
        description:
          'Explore the latest research-backed methodologies in physical rehabilitation therapy. This comprehensive guide covers modern techniques for improving mobility, strength, and functional independence in patients recovering from injuries or managing chronic conditions. Learn about the integration of technology in rehabilitation, personalized treatment plans, and outcome measurement strategies that are revolutionizing the field of physical therapy. Discover how evidence-based practice is enhancing patient outcomes and setting new standards in rehabilitation medicine.',
        descriptionAr:
          'استكشف أحدث المنهجيات المدعومة بالبحث في علاج إعادة التأهيل البدني. يغطي هذا الدليل الشامل التقنيات الحديثة لتحسين الحركة والقوة والاستقلالية الوظيفية لدى المرضى الذين يتعافون من الإصابات أو يديرون الحالات المزمنة. تعرف على تكامل التكنولوجيا في إعادة التأهيل وخطط العلاج المخصصة واستراتيجيات قياس النتائج التي تحدث ثورة في مجال العلاج الطبيعي. اكتشف كيف تعزز الممارسة القائمة على الأدلة نتائج المرضى وتضع معايير جديدة في طب إعادة التأهيل.',
        image:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        author: {
          name: 'Dr. Sarah Johnson',
          role: 'Physical Therapist',
          credentials: 'DPT, PhD',
          avatar: '',
        },
        readTime: '8 min read',
        category: {
          nameAr: 'العلاج الطبيعي',
          nameEn: 'Physical Therapy',
        },
        publishedAt: '2024-01-15',
      },
      {
        type: 'article',
        id: '2',
        title: 'Mental Health Support in Rehabilitation Settings',
        titleAr: 'دعم الصحة النفسية في بيئات إعادة التأهيل',
        description:
          'Understanding the crucial role of mental health support during the rehabilitation process. This article delves into the psychological challenges patients face during recovery and provides strategies for healthcare professionals to address mental health needs effectively. Learn about integrated care models, screening tools, and therapeutic interventions that support both physical and mental wellbeing. Discover how addressing mental health concerns can significantly improve rehabilitation outcomes and patient satisfaction',
        descriptionAr:
          'فهم الدور الحاسم لدعم الصحة النفسية أثناء عملية إعادة التأهيل. يتعمق هذا المقال في التحديات النفسية التي يواجهها المرضى أثناء التعافي ويقدم استراتيجيات للمهنيين الصحيين لتلبية احتياجات الصحة النفسية بفعالية. تعرف على نماذج الرعاية المتكاملة وأدوات الفحص والتدخلات العلاجية التي تدعم كل من الرفاهية الجسدية والنفسية. اكتشف كيف يمكن أن يؤدي معالجة مخاوف الصحة النفسية إلى تحسين نتائج إعادة التأهيل ورضا المرضى بشكل كبير',
        image:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        author: {
          name: 'Dr. Michael Chen',
          role: 'Clinical Psychologist',
          credentials: 'PhD',
          avatar: '',
        },
        readTime: '6 min read',
        category: {
          nameAr: 'الصحة النفسية',
          nameEn: 'Mental Health',
        },
        publishedAt: '2024-01-12',
      },
    ].map((article) => ({ ...article, isExpanded: false }));

    this.videos = [
      {
        id: '1',
        type: 'video',

        title: 'Advanced Physical Therapy Techniques for Spinal Rehabilitation',
        titleAr: 'تقنيات العلاج الطبيعي المتقدمة لإعادة تأهيل العمود الفقري',
        description:
          'Explore the integration of CBT techniques in physical rehabilitation programs. This educational video covers assessment of psychological barriers to recovery, implementation of cognitive restructuring techniques, and collaborative care approaches. Perfect for healthcare professionals working in multidisciplinary rehabilitation teams.',
        descriptionAr:
          'استكشف تكامل تقنيات العلاج السلوكي المعرفي في برامج إعادة التأهيل البدني. يغطي هذا الفيديو التعليمي تقييم الحواجز النفسية للتعافي، وتنفيذ تقنيات إعادة الهيكلة المعرفية، ومناهج الرعاية التعاونية. مثالي للمهنيين الصحيين العاملين في فرق إعادة التأهيل متعددة التخصصات.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        duration: '15:24',
        views: '12.5K',
        likes: '1.2K',
        publishedAt: '2 weeks ago',
        channel: { name: 'Rehabilitation Academy', avatar: '', verified: true },
        category: {
          nameAr: 'الصحة النفسية',
          nameEn: 'Mental Health',
        },
      },
    ].map((video) => ({ ...video, isExpanded: false }));
  }

  get filteredArticles(): any[] {
    return this.articles.filter((a) => {
      const categoryId = a.category.nameEn.toLowerCase().replace(/\s+/g, '-');
      const matchesCategory =
        this.activeCategory === 'all' || categoryId === this.activeCategory;
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      const matchesSearch =
        a.title.toLowerCase().includes(lowerCaseQuery) ||
        a.description.toLowerCase().includes(lowerCaseQuery) ||
        (a.titleAr && a.titleAr.toLowerCase().includes(lowerCaseQuery)) ||
        (a.descriptionAr &&
          a.descriptionAr.toLowerCase().includes(lowerCaseQuery));
      return matchesCategory && matchesSearch;
    });
  }

  get filteredVideos(): any[] {
    return this.videos.filter((v) => {
      const categoryId = v.category.nameEn.toLowerCase().replace(/\s+/g, '-');
      const matchesCategory =
        this.activeCategory === 'all' || categoryId === this.activeCategory;
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      const matchesSearch =
        v.title.toLowerCase().includes(lowerCaseQuery) ||
        v.description.toLowerCase().includes(lowerCaseQuery) ||
        (v.titleAr && v.titleAr.toLowerCase().includes(lowerCaseQuery)) ||
        (v.descriptionAr &&
          v.descriptionAr.toLowerCase().includes(lowerCaseQuery));
      return matchesCategory && matchesSearch;
    });
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  changeCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  clearFilters(): void {
    this.activeCategory = 'all';
    this.searchQuery = '';
  }

  showShareMenu: boolean = false;
  selectedItemId: number | null = null;

  toggleShareMenu(item: any): void {
    if (this.selectedItemId === item.id && this.showShareMenu) {
      this.showShareMenu = false;
      this.selectedItemId = null;
    } else {
      this.showShareMenu = true;
      this.selectedItemId = item.id;
    }
  }

  share(
    platform: 'whatsapp' | 'facebook' | 'copy' | 'native',
    item: any
  ): void {
    debugger;
    if (!item) return;

    let itemUrl: string;
    let itemTitle: string = item?.title?.trim() || 'Check this out!';

    if (item.type === 'video') {
      itemUrl = `${window.location.origin}/education/videos/${item.id}`;
    } else if (item.type === 'article') {
      itemUrl = `${window.location.origin}/education/articles/${item.id}`;
    } else {
      console.warn('Unknown item type');
      return;
    }

    switch (platform) {
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(
            itemTitle + '\n' + itemUrl
          )}`,
          '_blank'
        );
        break;

      case 'facebook':
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          itemUrl
        )}`;
        const fbWindow = window.open(fbUrl, '_blank', 'width=600,height=500');
        if (!fbWindow) window.location.href = fbUrl;
        break;

      case 'copy':
        navigator.clipboard
          .writeText(itemUrl)
          .then(() => alert('✅ Link copied to clipboard!'))
          .catch(() => alert('❌ Failed to copy link.'));
        break;

      case 'native':
        if (navigator.share) {
          navigator
            .share({ title: itemTitle, text: itemTitle, url: itemUrl })
            .catch((err) => console.warn('Share failed', err));
        } else {
          alert('Sharing is not supported on this device.');
        }
        break;
    }

    this.showShareMenu = false;
    this.selectedItemId = null;
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
