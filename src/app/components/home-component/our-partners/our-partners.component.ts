import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Partners } from './models/partners';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PartnersService } from './services/partners.service';
import { environment } from '../../../../environments/environment.development';
@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule, CardModule, TitleComponentComponent],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.responsive.scss'],
})
export class OurPartnersComponent implements OnInit {
  isVertical = false;
  isReverse = false;

  toggleDirection() {
    this.isVertical = !this.isVertical;
    this.isReverse = !this.isReverse;
  }
  @Input() logos: Partners[] = [];
  public readonly imgUrl = environment.imgUrl;
  @Input() animationDuration: number = 30;
  @Input() backgroundColor: string =
    'linear-gradient(to right, rgb(250 245 255), rgb(239 246 255))';

  partnersSignal = toSignal(this._ourPartners.getAllPartners(), {
    initialValue: [],
  });

  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourPartners: PartnersService
  ) {}

  ngOnInit() {
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
