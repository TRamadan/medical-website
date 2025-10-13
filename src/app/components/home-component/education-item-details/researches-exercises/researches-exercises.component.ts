import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { EducationalContentService } from '../../educational-videos/services/educationalContent.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-researches-exercises',
  standalone: true,
  templateUrl: './researches-exercises.component.html',
  styleUrls: ['./researches-exercises.component.css'],
})
export class ResearchesExercisesComponent implements OnInit {
  @Input() itemState: number = 0;
  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;

  researches: any[] = [];
  exercises: any[] = [];
  constructor(
    private _educationalContent: EducationalContentService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
  }

  ngOnChanges(changes: any) {
    if (changes['itemState'].currentValue == 2) {
      this.getResearches();
    } else {
      this.getAllExercises();
    }
  }

  getResearches(): void {
    this._educationalContent.getAllResearches().subscribe({
      next: (res: any) => {
        debugger;
        this.researches = res;
      },
      error: (error: any) => {
        //error handle goes here
      },
    });
  }

  getAllExercises(): void {
    this._educationalContent.getExercises().subscribe({
      next: (res: any) => {
        this.exercises = res;
      },
      error: (error: any) => {
        //error handle goes here
      },
    });
  }

  openResearch(link: string): void {
    window.open(link, '_blank');
  }
}
