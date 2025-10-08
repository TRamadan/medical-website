import { TranslationService } from './../../../services/translation.service';
import { Component, OnInit, signal } from '@angular/core';
import { EducationalContentService } from '../educational-videos/services/educationalContent.service';
import { Category } from '../educational-videos/models/category.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesVideosComponent } from './articles-videos/articles-videos.component';
import { ResearchesExercisesComponent } from './researches-exercises/researches-exercises.component';

@Component({
  selector: 'app-education-item-details',
  standalone: true,
  imports: [ArticlesVideosComponent, FormsModule, ResearchesExercisesComponent],
  templateUrl: './education-item-details.component.html',
  styleUrls: ['./education-item-details.component.css'],
})
export class EducationItemDetailsComponent implements OnInit {
  categories: Category[] = [];
  searchQuery: string = '';
  selectedCategoryId = signal<number | null>(null);
  item: any;
  selectedCategory: any = null;

  constructor(
    public translateService: TranslationService,
    private _educationalService: EducationalContentService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getCategories();
    const nav = this._router.getCurrentNavigation();
    this.item = nav?.extras?.state?.['item'] || history.state;
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
  }

  isSelected(cat: any): boolean {
    return this.selectedCategory?.id === cat.id;
  }
}
