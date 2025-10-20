import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Language, LanguageService } from '../../../services/language.service';
import { TranslationService } from '../../../services/translation.service';
import { Router, RouterOutlet } from '@angular/router';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, TitleComponentComponent],
  selector: 'app-educational-videos',
  templateUrl: './educational-videos.component.html',
  styleUrls: ['./educational-videos.component.css'],
})
export class EducationalVideosComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'en';
  showShareMenu = false;
  selectedItemId: string | number | null = null;

  educationLibraryCategories: any[] = [
    {
      nameEn: 'Articles',
      nameAr: 'المقالات',
      descriptionEn:
        'Explore in-depth articles on health, fitness, and wellness topics.',
      descriptionAr:
        'استكشف مقالات متعمقة حول مواضيع الصحة واللياقة البدنية والعافية.',
      icon: '../../../../assets/articles-new.svg',
      state: 1,
    },
    {
      nameEn: 'Researches',
      nameAr: 'الأبحاث',
      descriptionEn:
        'Access the latest scientific research and evidence-based studies.',
      descriptionAr:
        'اطلع على أحدث الأبحاث العلمية والدراسات المبنية على الأدلة.',
      icon: '../../../../assets/research-new.svg',
      state: 2,
    },
    {
      nameEn: 'Videos',
      nameAr: 'الفيديوهات التعليمية',
      descriptionEn: 'Watch educational videos and exercise demonstrations.',
      descriptionAr: 'شاهد فيديوهات تعليمية وعروض تمارين توضيحية.',
      icon: '../../../../assets/videos-new.svg',
      state: 3,
    },
    {
      nameEn: 'Exercise Programs',
      nameAr: 'برامج التمارين',
      descriptionEn:
        'Discover personalized workout plans and training programs.',
      descriptionAr: 'اكتشف خطط تمارين مخصصة وبرامج تدريبية متنوعة.',
      icon: '../../../../assets/exercise.svg',
      state: 4,
    },
  ];

  constructor(
    private languageService: LanguageService,
    public translateService: TranslationService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  showItemDetails(item: any): void {
    this._router.navigate(['/itemDetails'], { state: item });
  }
}
