import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/shared-ui/header/header.component';
import { FooterComponent } from './components/shared-ui/footer/footer.component';
import { filter } from 'rxjs';
import { LandingPageComponent } from './components/shared-ui/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'medical-website';
  isLoading = true;
  isAuthPage = false;

  isMobile = false;
  showFab = false;
  showTooltip = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.checkScreenSize();
    this.checkCurrentRoute();

    // Listen to route changes
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        this.checkCurrentRoute();
        this.handleFabDisplay();
      });

    // Simulate loading completion
    setTimeout(() => {
      this.isLoading = false;
      this.handleFabDisplay();
    }, 2000);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.handleFabDisplay();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  private checkCurrentRoute() {
    const currentUrl = this.router.url;
    this.isAuthPage =
      currentUrl.includes('/login') ||
      currentUrl.includes('/register') ||
      currentUrl.includes('/auth');
  }

  private handleFabDisplay() {
    const currentUrl = this.router.url;
    const isBookingPage = currentUrl.includes('/booking');
    const isHomePage = currentUrl === '/' || currentUrl === '/home';

    // Show FAB only on mobile, not on auth pages, and not on booking page
    this.showFab =
      this.isMobile && !this.isAuthPage && !isBookingPage && !this.isLoading;

    // Show tooltip only on home page after 3 seconds
    if (this.showFab && isHomePage) {
      setTimeout(() => {
        this.showTooltip = true;
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          this.showTooltip = false;
        }, 5000);
      }, 3000);
    } else {
      this.showTooltip = false;
    }
  }

  navigateToBooking() {
    this.router.navigate(['/booking']);
  }
}
