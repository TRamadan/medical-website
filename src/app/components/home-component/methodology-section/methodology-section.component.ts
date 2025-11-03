import { Component, OnInit, signal } from '@angular/core';
import { map, finalize } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { MethodologyService } from './services/methodology.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment.development';
import { LoadingSkeletonComponent } from '../../shared-ui/loading-skeleton/loading-skeleton.component';

@Component({
  standalone: true,
  selector: 'app-methodology-section',
  templateUrl: './methodology-section.component.html',
  styleUrls: ['./methodology-section.component.css'],
  imports: [CommonModule, TitleComponentComponent, LoadingSkeletonComponent],
})
export class MethodologySectionComponent implements OnInit {
  currentLang: 'en' | 'ar' = 'en';
  loading = signal(true);
  MethodologySignal = signal<any[]>([]);
  public readonly imgurl = environment.imgUrl;

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourMethodology: MethodologyService
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => (this.currentLang = lang)
    );

    // 🟢 استدعاء البيانات مع التحكم اليدوي في الـ loading
    this.fetchData();
  }

  fetchData() {
    this.loading.set(true);
    this._ourMethodology
      .getAllMethodologies()
      .pipe(
        map((res: any[]) =>
          res.filter((item) => item.isCuttingEdgeTechnology === false)
        ),
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (data) => this.MethodologySignal.set(data),
        error: () => this.loading.set(false),
      });
  }
}
