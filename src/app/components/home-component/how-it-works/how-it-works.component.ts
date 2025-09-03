import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
  imports: [CommonModule, TitleComponentComponent],
})
export class HowItWorksComponent implements OnInit {
  ngOnInit(): void {}
}
