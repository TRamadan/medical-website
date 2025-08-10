import { Component, Input, OnInit } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-title-component',
  standalone: true,
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.css'],
})
export class TitleComponentComponent implements OnInit {
  @Input() titleKey: string = '';
  @Input() subtitle1Key: string = '';
  @Input() subtitle2Key: string = '';
  @Input() subtitleKey: string = '';

  title: string = '';
  subtitle1: string = '';
  subtitle2: string = '';
  subtitle: string = '';
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    debugger;
    this.title = this.translationService.translate(this.titleKey);
    this.subtitle1 = this.translationService.translate(this.subtitle1Key);
    this.subtitle2 = this.translationService.translate(this.subtitle2Key);
    this.subtitle = this.translationService.translate(this.subtitleKey);
  }
}
