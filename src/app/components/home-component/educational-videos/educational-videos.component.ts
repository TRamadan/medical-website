import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
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
  categories: any[] = [
    { id: 'all', name: 'All Articles', count: 12 },
    { id: 'physical-therapy', name: 'Physical Therapy', count: 4 },
    { id: 'mental-health', name: 'Mental Health', count: 3 },
    { id: 'occupational-therapy', name: 'Occupational Therapy', count: 3 },
    { id: 'rehabilitation', name: 'Rehabilitation', count: 2 },
  ];

  articles: any[] = [];
  videos: any[] = [];

  activeCategory: string = 'all';
  activeTab: string = 'articles';
  searchQuery: string = '';

  ngOnInit(): void {
    // مؤقتاً هنحط بيانات بسيطة بدل الصور
    this.articles = [
      // Add .map to include isExpanded property
      {
        id: '1',
        type: 'article',
        title: 'Evidence-Based Approaches to Physical Rehabilitation',
        description:
          'Explore the latest research-backed methodologies in physical rehabilitation therapy. This comprehensive guide covers modern techniques for improving mobility, strength, and functional independence in patients recovering from injuries or managing chronic conditions. Learn about the integration of technology in rehabilitation, personalized treatment plans, and outcome measurement strategies that are revolutionizing the field of physical therapy. Discover how evidence-based practice is enhancing patient outcomes and setting new standards in rehabilitation medicine.',
        image:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        author: {
          name: 'Dr. Sarah Johnson',
          role: 'Physical Therapist',
          credentials: 'DPT, PhD',
          avatar: '',
        },
        readTime: '8 min read',
        category: 'Physical Therapy',
        publishedAt: '2024-01-15',
      },
      {
        type: 'article',
        id: '2',
        title: 'Mental Health Support in Rehabilitation Settings',
        description:
          'Understanding the crucial role of mental health support during the rehabilitation process. This article delves into the psychological challenges patients face during recovery and provides strategies for healthcare professionals to address mental health needs effectively. Learn about integrated care models, screening tools, and therapeutic interventions that support both physical and mental wellbeing. Discover how addressing mental health concerns can significantly improve rehabilitation outcomes and patient satisfaction',
        image:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        author: {
          name: 'Dr. Michael Chen',
          role: 'Clinical Psychologist',
          credentials: 'PhD',
          avatar: '',
        },
        readTime: '6 min read',
        category: 'Mental Health',
        publishedAt: '2024-01-12',
      },
    ].map((article) => ({ ...article, isExpanded: false }));

    this.videos = [
      // Add .map to include isExpanded property
      {
        id: '1',
        type: 'video',

        title: 'Advanced Physical Therapy Techniques for Spinal Rehabilitation',
        description:
          'Explore the integration of CBT techniques in physical rehabilitation programs. This educational video covers assessment of psychological barriers to recovery, implementation of cognitive restructuring techniques, and collaborative care approaches. Perfect for healthcare professionals working in multidisciplinary rehabilitation teams.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail:
          'https://id-preview--a57dc554-4965-40b9-a935-f53213711003.lovable.app/assets/physical-therapy-DFxcq2Xa.jpg',
        duration: '15:24',
        views: '12.5K',
        likes: '1.2K',
        publishedAt: '2 weeks ago',
        channel: { name: 'Rehabilitation Academy', avatar: '', verified: true },
        category: 'Physical Therapy',
      },
    ].map((video) => ({ ...video, isExpanded: false }));
  }

  get filteredArticles(): any[] {
    return this.articles.filter((a) => {
      const matchesCategory =
        this.activeCategory === 'all' ||
        a.category.toLowerCase().replace(/\s+/g, '-') === this.activeCategory;
      const matchesSearch =
        a.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  get filteredVideos(): any[] {
    return this.videos.filter((v) => {
      const matchesCategory =
        this.activeCategory === 'all' ||
        v.category.toLowerCase().replace(/\s+/g, '-') === this.activeCategory;
      const matchesSearch =
        v.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(this.searchQuery.toLowerCase());
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

    // تحديد الرابط بناءً على نوع المحتوى
    let itemUrl: string;
    let itemTitle: string = item?.title?.trim() || 'Check this out!';

    if (item.type === 'video') {
      // في حالة الفيديو
      itemUrl = `${window.location.origin}/education/videos/${item.id}`;
    } else if (item.type === 'article') {
      // في حالة المقال
      itemUrl = `${window.location.origin}/education/articles/${item.id}`;
    } else {
      // في حالة عدم معرفة نوع الكائن
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

  ngOnDestroy(): void {}
}
