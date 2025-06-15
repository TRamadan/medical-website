import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { EducationalVideosComponent } from './educational-videos/educational-videos.component';
import { JoinOutTeamComponent } from './join-out-team/join-out-team.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { SuperStarsComponent } from './super-stars/super-stars.component';
@Component({
  standalone: true,
  imports: [
    SuperStarsComponent,
    OurPartnersComponent,
    HowItWorksComponent,
    EducationalVideosComponent,
    HeroSectionComponent,
    JoinOutTeamComponent,
    AboutUsSectionComponent,
    ContactUsComponent,
    ServicesComponent,
  ],
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
