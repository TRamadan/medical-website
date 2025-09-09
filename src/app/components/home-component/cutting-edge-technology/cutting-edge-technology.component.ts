import { Component, DestroyRef, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MethodologyService } from '../methodology-section/services/methodology.service';

@Component({
  selector: 'app-cutting-edge-technology',
  standalone: true,
  templateUrl: './cutting-edge-technology.component.html',
  styleUrls: ['./cutting-edge-technology.component.css'],
  imports: [TitleComponentComponent],
})
export class CuttingEdgeTechnologyComponent implements OnInit {
  currentLang: string = '';
  CuttingEdgeTechnologySectionSignal = toSignal(
    this._ourMethodology
      .getAllMethodologies()
      .pipe(
        map((res: any[]) =>
          res.filter((item) => item.isCuttingEdgeTechnology == true)
        )
      ),
    { initialValue: [] }
  );

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourMethodology: MethodologyService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((lang) => {
        debugger;
        this.currentLang = lang;
      });
  }
}
