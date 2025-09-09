import { Methodology } from './models/methodology';
import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MethodologyService } from './services/methodology.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment.development';

@Component({
  standalone: true,
  selector: 'app-methodology-section',
  templateUrl: './methodology-section.component.html',
  styleUrls: ['./methodology-section.component.css'],
  imports: [CommonModule, TitleComponentComponent],
})
export class MethodologySectionComponent implements OnInit {
  private languageSubscription?: Subscription;

  public readonly imgurl = environment.imgUrl;
  public currentLanguage: string = this.languageService.getCurrentLanguage();
  MethodologySignal = toSignal(
    this._ourMethodology
      .getAllMethodologies()
      .pipe(
        map((res: any[]) =>
          res.filter((item) => item.isCuttingEdgeTechnology == false)
        )
      ),
    { initialValue: [] }
  );

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourMethodology: MethodologyService
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
    // console.log(this.currentLanguage);
  }
}
