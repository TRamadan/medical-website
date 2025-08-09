import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-cutting-edge-technology',
  standalone: true,
  templateUrl: './cutting-edge-technology.component.html',
  styleUrls: ['./cutting-edge-technology.component.css'],
})
export class CuttingEdgeTechnologyComponent implements OnInit {
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe();
  }
}
