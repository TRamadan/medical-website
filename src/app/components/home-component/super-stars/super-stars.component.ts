import { Component, OnInit } from '@angular/core';
import { VipSuperStarsComponent } from './vip-super-stars/vip-super-stars.component';
import { NormalSuperStarComponent } from './normal-super-star/normal-super-star.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  standalone: true,
  imports: [VipSuperStarsComponent, NormalSuperStarComponent],
  selector: 'app-super-stars',
  templateUrl: './super-stars.component.html',
  styleUrls: ['./super-stars.component.css'],
})
export class SuperStarsComponent implements OnInit {
  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {}
}
