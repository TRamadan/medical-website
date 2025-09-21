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
  services = [
    {
      icon: 'fas fa-leaf',
      title: 'Strategize',
      description:
        'Craft a roadmap to amplify your agility, resilience, and competitive edge.',
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Architect',
      description:
        'Our expert architects design the foundation for your digital transformation.',
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Develop',
      description: 'Fuel innovation with our agile software development team.',
    },
    {
      icon: 'fas fa-tools',
      title: 'Implement',
      description:
        'Experience flawless execution as we meticulously bring your vision to life.',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Launch',
      description:
        'Take your product to market with confidence and sustained growth.',
    },
  ];
  ngOnInit(): void {}
}
