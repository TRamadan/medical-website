import { TranslationService } from './../../../services/translation.service';
import { Component, OnInit, signal } from '@angular/core';
import { EducationalContentService } from '../educational-videos/services/educationalContent.service';
import { Category } from '../educational-videos/models/category.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesVideosComponent } from './articles-videos/articles-videos.component';
import { ResearchesExercisesComponent } from './researches-exercises/researches-exercises.component';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { Education } from '../educational-videos/models/education';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education-item-details',
  standalone: true,
  imports: [
    ArticlesVideosComponent,
    FormsModule,
    ResearchesExercisesComponent,
    TitleComponentComponent,
  ],
  templateUrl: './education-item-details.component.html',
  styleUrls: ['./education-item-details.component.css'],
})
export class EducationItemDetailsComponent implements OnInit {
  categories: Category[] = [];
  allArticles: Education[] = [];
  allVideos: Education[] = [];
  allContent: Education[] = [];
  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;

  searchQuery: string = '';
  selectedCategoryId = signal<number | null>(null);
  item: any;
  selectedCategory: any = null;

  constructor(
    public translateService: TranslationService,
    private _educationalService: EducationalContentService,
    private _router: Router,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.getCategories();
    this.getEducationalContent();
    const nav = this._router.getCurrentNavigation();
    this.item = nav?.extras?.state?.['item'] || history.state;

    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
  }

  //here is the function needed to get all added categories
  getCategories(): void {
    this._educationalService.getAllCategories().subscribe({
      next: (res: any) => {
        const allCategoreis: Category = {
          id: '',
          nameAr: 'جميع الفئات',
          nameEn: 'All Categories',
        };
        this.categories = [allCategoreis, ...res];
        this.selectedCategory = this.categories[0];
      },
      error: (error: any) => {
        //error handling goes here
      },
    });
  }

  selectCategory(cat: any): void {
    this.selectedCategory = cat;
    this.selectedCategory.id == ''
      ? this.getEducationalContent()
      : this.getDataBasedOnSelectedCategory(cat.id);
  }

  //here is the function needed to get the data based on the choosed category
  getDataBasedOnSelectedCategory(catId: number): void {
    this._educationalService.getEducationalContentByCategory(catId).subscribe({
      next: (res: any) => {
        if (res && res.educations && res.educations.length > 0) {
          this.allContent = res.educations;
          if (this.item.state == 1) {
            this.allArticles = this.allContent.filter((element: Education) => {
              return element.isArticle;
            });
            this.allVideos = [];
          } else {
            this.allVideos = this.allContent.filter((element: Education) => {
              return !element.isArticle;
            });
            this.allArticles = [];
          }
        } else {
          // Handle case where the category has no content
          this.allArticles = [];
          this.allVideos = [];
        }
      },
      error: (error: any) => {
        //error handling goes here
      },
    });
  }

  isSelected(cat: any): boolean {
    return this.selectedCategory?.id === cat.id;
  }

  //here is the function needed to get all educational content for articles and videos
  getEducationalContent() {
    this.allArticles = [];
    this.allVideos = [];
    this._educationalService.getAllEducationalContent().subscribe({
      next: (res: any) => {
        debugger;
        this.allContent = res;
        if (this.item.state == 1) {
          this.allArticles = this.allContent.filter((element: Education) => {
            return element.isArticle;
          });
        } else {
          this.allVideos = this.allContent.filter((element: Education) => {
            return !element.isArticle;
          });
        }
      },
      error: (error: any) => {
        //error handling goes here
      },
    });
  }
}
