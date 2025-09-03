import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Partners } from './models/partners';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { PartnersService } from './services/partners.service';
@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CardModule, TitleComponentComponent],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.responsive.scss'],
})
export class OurPartnersComponent implements OnInit {
  @Input() logos: Partners[] = [];
  @Input() animationDuration: number = 30;
  @Input() backgroundColor: string =
    'linear-gradient(to right, rgb(250 245 255), rgb(239 246 255))';

  partnersSignal = toSignal(this._ourPartners.getAllPartners(), {
    initialValue: [],
  });

  defaultLogos: Partners[] = [
    {
      id: 1,
      logo: 'assets/logo_1.png',
    },
    {
      id: 2,
      logo: 'assets/logo_2.png',
    },
    {
      id: 3,
      logo: 'assets/logo_3.png',
    },
    {
      id: 4,
      logo: 'assets/logo_4.png',
    },
    {
      id: 5,
      logo: 'assets/logo_5.png',
    },
    {
      id: 6,
      logo: 'assets/logo_6.png',
    },
  ];

  // duplicatedLogos: Partners[] = [];
  private languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService,
    private _ourPartners: PartnersService
  ) {}

  ngOnInit() {
    // if (this.logos.length === 0) {
    //   this.logos = this.partnersSignal();
    // }
    // this.duplicatedLogos = [...this.logos, ...this.logos];
    this.languageSubscription =
      this.languageService.currentLanguage$.subscribe();
  }
}
