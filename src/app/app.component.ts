import { Component, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './components/shared-ui/header/header.component';
import { Title, Meta } from '@angular/platform-browser';
import { FooterComponent } from './components/shared-ui/footer/footer.component';
import { filter } from 'rxjs';
import { LandingPageComponent } from './components/shared-ui/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
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
  private readonly NAVBAR_SELECTOR = '.navbar'; // غيّر لو عندك selector مختلف
  private readonly WAIT_TIMEOUT = 6000; // ms — مدة الانتظار للعنصر قبل الفشل

  title = 'medical-website';
  isLoading = true;
  isAuthPage = false;
  showHeaderFooter = true

  isMobile = false;
  showFab = false;
  showTooltip = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    // Defer non-critical JS like animations to improve initial load performance.
    setTimeout(() => {
      AOS.init({
        // Optional: Configure global settings for AOS
        disable: false, // Accepts 'phone', 'tablet', 'mobile', boolean, expression, or function
        startEvent: 'DOMContentLoaded', // Event to initialize AOS on
        initClassName: 'aos-init', // Class applied after initialization
        animatedClassName: 'aos-animate', // Class applied on animation
        once: false, // Whether animation should happen only once - default
        mirror: true, // Whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // Defines which position of the element should trigger the animation
        duration: 1000, // Values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // Easing options
        delay: 0, // Values from 0 to 3000, with step 50ms
      });
    }, 2500); // Delay initialization by 2.5 seconds

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
        this.updateMetaTags(event.urlAfterRedirects);
        this.handleFabDisplay();
        this.showHeaderFooter = !event.urlAfterRedirects.includes('/intake-form');

      });

    // Simulate loading completion
    setTimeout(() => {
      this.isLoading = false;
      this.handleFabDisplay();
      // This is the crucial part. After the loading screen is gone,
      // we force AOS to re-calculate all element positions.
      // A small extra delay ensures the browser has painted everything.
      setTimeout(() => AOS.refreshHard(), 50);
    }, 2000);


  }

  private updateMetaTags(url: string) {
    let title = 'The Sports Doctor - Elite Performance Through Science';
    let description =
      'Unlock your athletic potential with cutting-edge sports science, proven methodologies, and personalized training programs trusted by world champions.';

    if (url.startsWith('/aboutus')) {
      title = 'About Us - The Sports Doctor';
      description =
        'Learn about our mission at The Sports Doctor, where passion meets precision and setbacks become comebacks.';
    } else if (url.startsWith('/education')) {
      title = 'Rehabilitation Learning - The Sports Doctor';
      description =
        'Learn from medical experts how to manage, rehabilitate, and prevent sports injuries through step-by-step educational content.';
    } else if (url.startsWith('/bookappointment')) {
      title = 'Book an Appointment - The Sports Doctor';
      description =
        'Schedule your medical consultation with our qualified doctors and specialists. Simple booking for your convenience.';
    } else if (url.startsWith('/auth')) {
      title = 'Account Access - The Sports Doctor';
      description = 'Login or register to access your Sports Doctor account.';
    }

    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }

  ngAfterViewInit(): void {
    AOS.refresh();

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 400); // تأخير بسيط علشان يضمن إن العناصر ظهرت
        }
      });
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
