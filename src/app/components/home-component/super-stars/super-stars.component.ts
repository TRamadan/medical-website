import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { VipSuperStarsComponent } from './vip-super-stars/vip-super-stars.component';
import { NormalSuperStarComponent } from './normal-super-star/normal-super-star.component';

@Component({
  standalone: true,
  imports: [VipSuperStarsComponent, NormalSuperStarComponent],
  selector: 'app-super-stars',
  templateUrl: './super-stars.component.html',
  styleUrls: ['./super-stars.component.css'],
})
export class SuperStarsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
