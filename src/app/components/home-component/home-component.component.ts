import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
// import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { ServicesComponent } from './services/services.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
// import { EducationalVideosComponent } from './educational-videos/educational-videos.component';
// import { JoinOutTeamComponent } from './join-out-team/join-out-team.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { SuperStarsComponent } from './super-stars/super-stars.component';
import { BookingComponent } from './booking/booking.component';
import { MethodologySectionComponent } from './methodology-section/methodology-section.component';
import { OurBenefitsComponent } from './our-benefits/our-benefits.component';
import { CuttingEdgeTechnologyComponent } from './cutting-edge-technology/cutting-edge-technology.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
@Component({
  standalone: true,
  imports: [
    OurBenefitsComponent,
    SuccessStoriesComponent,
    CuttingEdgeTechnologyComponent,
    MethodologySectionComponent,
    BookingComponent,
    SuperStarsComponent,
    OurPartnersComponent,
    HowItWorksComponent,
    // EducationalVideosComponent,
    HeroSectionComponent,
    // JoinOutTeamComponent,
    // AboutUsSectionComponent,
    ContactUsComponent,
    // ServicesComponent,
  ],
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  isSmallScreen: boolean = false;
  showTooltip: boolean = false;
  isInitialized = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize screen size immediately in constructor
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      this.isInitialized = true;
    }
  }

  ngOnInit() {
    // Ensure initialization is complete
    if (!this.isInitialized && isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      this.isInitialized = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  navigateToBooking() {
    this.router.navigate(['/bookappointment']);
  }

  showTooltipHandler() {
    this.showTooltip = true;
  }

  hideTooltipHandler() {
    this.showTooltip = false;
  }
}
