import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CuttingEdgeTechnologyService } from './services/cuttingEdgeTechnology.service';

@Component({
  selector: 'app-cutting-edge-technology',
  standalone: true,
  templateUrl: './cutting-edge-technology.component.html',
  styleUrls: ['./cutting-edge-technology.component.css'],
  imports: [TitleComponentComponent],
})
export class CuttingEdgeTechnologyComponent implements OnInit {
  private languageSubscription?: Subscription;

  CuttingEdgeTechnologySectionSignal = toSignal(
    this._ourCuttingEdgeTechnology.getAllCuttingEdgeTechnology(),
    {
      initialValue: [],
    }
  );

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourCuttingEdgeTechnology: CuttingEdgeTechnologyService
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
