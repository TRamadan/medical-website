import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { OurTeamComponent } from './our-team/our-team.component';
import { AdvisorBoardComponent } from './advisor-board/advisor-board.component';
import { Router } from '@angular/router';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
@Component({
  standalone: true,
  imports: [OurTeamComponent, AdvisorBoardComponent, TitleComponentComponent],
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css'],
})
export class AboutUsSectionComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;
  aboutUsContentCards: any[] = [
    {
      id: 1,
      title: 'Our Philosophy',
      subTitle:
        'Success in sports is not just about numbers and medals—it is fueled by deep passion and self-realization.',
      quote:
        'We turn moments of weakness into centers of strength, transforming injury into opportunity for growth.',
      icon: 'fas fa-brain tech-icon',
    },
    {
      id: 2,
      title: 'Our Mission',
      subTitle:
        'To be your partner on a unique journey built on wisdom and heart, guided by the precision of science.',
      quote:
        'We help you draw a clear roadmap, turning anxiety into confidence and certainty',
      icon: 'fas fa-bullseye tech-icon',
    },
    {
      id: 3,
      title: 'Our Approach',
      subTitle:
        'We use cutting-edge technology and machine learning to translate your passion into measurable scientific steps.',
      quote:
        'We predict potential injuries and reveal your latent potential for complete control and security.',
      icon: 'fas fa-microscope tech-icon',
    },
  ];

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        // this.updateTeamMembers();
        // this.updateCertifications();
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  viewAllContent(): void {
    console.log('sflksjf');
  }

  startBookingProcess(): void {
    this.router.navigate(['/bookappointment']);
  }
}
