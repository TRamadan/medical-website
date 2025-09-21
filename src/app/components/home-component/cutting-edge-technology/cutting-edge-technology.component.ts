import { Component, OnInit, signal } from '@angular/core';
import { finalize, map, Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { MethodologyService } from '../methodology-section/services/methodology.service';
import { LoadingSkeletonComponent } from '../../shared-ui/loading-skeleton/loading-skeleton.component';

@Component({
  selector: 'app-cutting-edge-technology',
  standalone: true,
  templateUrl: './cutting-edge-technology.component.html',
  styleUrls: ['./cutting-edge-technology.component.css'],
  imports: [TitleComponentComponent, LoadingSkeletonComponent],
})
export class CuttingEdgeTechnologyComponent implements OnInit {
  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;
  loading = true;
  CuttingEdgeTechnologySectionSignal = signal<any[]>([]);

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourMethodology: MethodologyService
  ) {}

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );

    this._ourMethodology
      .getAllMethodologies()
      .pipe(
        map((res: any[]) =>
          res.filter((item) => item.isCuttingEdgeTechnology == true)
        ),
        finalize(() => (this.loading = false))
      )
      .subscribe((data) => {
        this.CuttingEdgeTechnologySectionSignal.set(data);
      });
  }
}
