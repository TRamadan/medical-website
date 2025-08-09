import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';
import { OurTeamComponent } from './our-team/our-team.component';

@Component({
  standalone: true,
  imports: [OurTeamComponent],
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
    private languageService: LanguageService
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

  // private updateTeamMembers(): void {
  //   this.teamMembers = [
  //     {
  //       name: 'Dr. Sarah Johnson',
  //       role: this.translationService.translate('about.team.sarah.role'),
  //       specialization: this.translationService.translate(
  //         'about.team.sarah.specialization'
  //       ),
  //       image:
  //         'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //       certifications: ['DPT', 'OCS', 'CSCS'],
  //     },
  //     {
  //       name: 'Dr. Michael Chen',
  //       role: this.translationService.translate('about.team.michael.role'),
  //       specialization: this.translationService.translate(
  //         'about.team.michael.specialization'
  //       ),
  //       image:
  //         'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  //       certifications: ['DPT', 'NCS', 'CBIS'],
  //     },
  //     {
  //       name: 'Dr. Emma Rodriguez',
  //       role: this.translationService.translate('about.team.emma.role'),
  //       specialization: this.translationService.translate(
  //         'about.team.emma.specialization'
  //       ),
  //       image:
  //         'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //       certifications: ['MS', 'ACSM', 'FMS'],
  //     },
  //     {
  //       name: 'Dr. James Wilson',
  //       role: this.translationService.translate('about.team.james.role'),
  //       specialization: this.translationService.translate(
  //         'about.team.james.specialization'
  //       ),
  //       image:
  //         'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  //       certifications: ['DPT', 'COMT', 'Cert.MDT'],
  //     },
  //   ];
  // }

  // private updateCertifications(): void {
  //   this.certifications = [
  //     this.translationService.translate('about.certifications.licensed'),
  //     this.translationService.translate('about.certifications.apta'),
  //     this.translationService.translate('about.certifications.ceu'),
  //     this.translationService.translate('about.certifications.hipaa'),
  //     this.translationService.translate('about.certifications.cpr'),
  //     this.translationService.translate('about.certifications.telehealth'),
  //     this.translationService.translate('about.certifications.evidence'),
  //     this.translationService.translate('about.certifications.safety'),
  //   ];
  // }

  viewAllContent(): void {
    console.log('sflksjf');
  }
}
