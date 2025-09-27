import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
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
  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  services = [
    {
      icon: 'fas fa-calendar-check',
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description',
    },
    {
      icon: 'fas fa-clipboard-list',
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description',
    },
    {
      icon: 'fas fa-mobile-alt',
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description',
    },
    {
      icon: 'fas fa-tasks',
      titleKey: 'howItWorks.step4.title',
      descriptionKey: 'howItWorks.step4.description',
    },
    {
      icon: 'fas fa-headset',
      titleKey: 'howItWorks.step5.title',
      descriptionKey: 'howItWorks.step5.description',
    },
  ];
  ngOnInit(): void {
    // It's better to initialize AOS after the view is rendered to ensure all elements are in the DOM.
  }
}
