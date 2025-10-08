import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-articles-videos',
  standalone: true,
  templateUrl: './articles-videos.component.html',
  styleUrls: ['./articles-videos.component.css'],
})
export class ArticlesVideosComponent implements OnInit {
  @Input() itemState: number = 0;

  articles: any[] = [];
  videos: any[] = [];
  selectedItem: any = null;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes['itemState'].currentValue == 1) {
      this.articles = [
        {
          id: 1,
          title: 'Common Symbols And Their Meanings',
          titleAr: 'الرموز الشائعة ومعانيها',
          description:
            'Explore the fascinating world of symbols and discover their hidden meanings across different cultures and contexts.',
          descriptionAr:
            'استكشف عالم الرموز الرائع واكتشف معانيها الخفية عبر الثقافات والسياقات المختلفة.',
          image:
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=150&fit=crop',
          authorName: 'Jane Russell',
          authorAvatar: 'https://i.pravatar.cc/30?img=2',
          categoryId: 6,
        },
        {
          id: 2,
          title: 'Success Steps For Your Business',
          titleAr: 'خطوات النجاح لعملك',
          description:
            'Learn the essential steps and strategies to build a successful business from the ground up.',
          descriptionAr:
            'تعلم الخطوات والاستراتيجيات الأساسية لبناء مشروع تجاري ناجح من الصفر.',
          image:
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=150&fit=crop',
          authorName: 'Conner Benson',
          authorAvatar: 'https://i.pravatar.cc/30?img=3',
          categoryId: 6,
        },
        {
          id: 3,
          title: 'The Strength Of Your Belief',
          titleAr: 'قوة إيمانك',
          description:
            'Discover how the power of belief can transform your life and help you achieve your goals.',
          descriptionAr:
            'اكتشف كيف يمكن لقوة الإيمان أن تحول حياتك وتساعدك على تحقيق أهدافك.',
          image:
            'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&h=150&fit=crop',
          authorName: 'Sebastian Weber',
          authorAvatar: 'https://i.pravatar.cc/30?img=4',
          categoryId: 7,
        },
        {
          id: 4,
          title: 'Digital Marketing Strategies',
          titleAr: 'استراتيجيات التسويق الرقمي',
          description:
            'Master modern digital marketing techniques to grow your online presence and reach your target audience.',
          descriptionAr:
            'أتقن تقنيات التسويق الرقمي الحديثة لتنمية تواجدك عبر الإنترنت والوصول إلى جمهورك المستهدف.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop',
          authorName: 'Michael Chen',
          authorAvatar: 'https://i.pravatar.cc/30?img=5',
          categoryId: 7,
        },
        {
          id: 5,
          title: 'The Future of Technology',
          titleAr: 'مستقبل التكنولوجيا',
          description:
            'Explore emerging technologies and trends that will shape our future and revolutionize the way we live.',
          descriptionAr:
            'استكشف التقنيات والاتجاهات الناشئة التي ستشكل مستقبلنا وتحدث ثورة في طريقة حياتنا.',
          image:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=150&fit=crop',
          authorName: 'Sarah Johnson',
          authorAvatar: 'https://i.pravatar.cc/30?img=6',
          categoryId: 8,
        },
      ];
    } else {
      this.videos = [
        {
          id: 1,
          title: 'Introduction to Web Development',
          titleAr: 'مقدمة في تطوير الويب',
          description:
            'Learn the fundamentals of web development including HTML, CSS, and JavaScript basics.',
          descriptionAr:
            'تعلم أساسيات تطوير الويب بما في ذلك HTML و CSS وأساسيات JavaScript.',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
          authorName: 'John Smith',
          authorAvatar: 'https://i.pravatar.cc/30?img=1',
          duration: '15:30',
          categoryId: 6,
        },
        {
          id: 2,
          title: 'Advanced JavaScript Techniques',
          titleAr: 'تقنيات JavaScript المتقدمة',
          description:
            'Master advanced JavaScript concepts including closures, promises, and async/await patterns.',
          descriptionAr:
            'أتقن مفاهيم JavaScript المتقدمة بما في ذلك الإغلاقات والوعود وأنماط async/await.',
          videoUrl: 'https://www.youtube.com/embed/example2',
          thumbnail:
            'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
          authorName: 'Jane Russell',
          authorAvatar: 'https://i.pravatar.cc/30?img=2',
          duration: '22:45',
          categoryId: 6,
        },
        {
          id: 3,
          title: 'UI/UX Design Principles',
          titleAr: 'مبادئ تصميم واجهة وتجربة المستخدم',
          description:
            'Understand the core principles of creating beautiful and user-friendly interfaces.',
          descriptionAr:
            'افهم المبادئ الأساسية لإنشاء واجهات جميلة وسهلة الاستخدام.',
          videoUrl: 'https://www.youtube.com/embed/example3',
          thumbnail:
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
          authorName: 'Sarah Johnson',
          authorAvatar: 'https://i.pravatar.cc/30?img=6',
          duration: '18:20',
          categoryId: 7,
        },
        {
          id: 4,
          title: 'React Best Practices',
          titleAr: 'أفضل ممارسات React',
          description:
            'Explore best practices for building scalable and maintainable React applications.',
          descriptionAr:
            'استكشف أفضل الممارسات لبناء تطبيقات React قابلة للتوسع وسهلة الصيانة.',
          videoUrl: 'https://www.youtube.com/embed/example4',
          thumbnail:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
          authorName: 'Michael Chen',
          authorAvatar: 'https://i.pravatar.cc/30?img=5',
          duration: '25:10',
          categoryId: 7,
        },
        {
          id: 5,
          title: 'Cloud Computing Fundamentals',
          titleAr: 'أساسيات الحوسبة السحابية',
          description:
            'Get started with cloud computing and learn about AWS, Azure, and Google Cloud platforms.',
          descriptionAr:
            'ابدأ مع الحوسبة السحابية وتعرف على منصات AWS و Azure و Google Cloud.',
          videoUrl: 'https://www.youtube.com/embed/example5',
          thumbnail:
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop',
          authorName: 'Sebastian Weber',
          authorAvatar: 'https://i.pravatar.cc/30?img=4',
          duration: '30:00',
          categoryId: 8,
        },
        {
          id: 6,
          title: 'Data Structures and Algorithms',
          titleAr: 'هياكل البيانات والخوارزميات',
          description:
            'Master essential data structures and algorithms for technical interviews and problem-solving.',
          descriptionAr:
            'أتقن هياكل البيانات والخوارزميات الأساسية للمقابلات التقنية وحل المشكلات.',
          videoUrl: 'https://www.youtube.com/embed/example6',
          thumbnail:
            'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
          authorName: 'Conner Benson',
          authorAvatar: 'https://i.pravatar.cc/30?img=3',
          duration: '45:15',
          categoryId: 8,
        },
      ];
    }
  }

  selectItem(item: any): void {
    this.selectedItem = item;
  }

  isItemSelected(item: any): boolean {
    return this.selectedItem?.id === item.id;
  }
}
