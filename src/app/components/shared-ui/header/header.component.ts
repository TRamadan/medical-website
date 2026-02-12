import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { LanguageService } from '../../../services/language.service';
import { TranslationService } from '../../../services/translation.service';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';

interface NavItem {
  name: string;
  path: string;
  fragment?: string;
  // href: string; // Removed in favor of path/fragment
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private languageSubscription?: Subscription;
  private routeSubscription?: Subscription;

  isScrolled = false;
  private forceSolidNavbar = false;
  language = 'EN';
  isMobileMenuOpen = false;

  mainNavItems: NavItem[] = [];
  contactNavItem: any = { name: '', path: '' }; // Updated type

  constructor(
    private router: Router,
    private languageService: LanguageService,
    public translationService: TranslationService
  ) {}

  ngOnInit() {
    this.updateTranslations();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        this.updateTranslations();
      }
    );

    // Initialize header style based on current route
    if (this.router.url.startsWith('/aboutus')) {
      this.forceSolidNavbar = true;
      this.isScrolled = true;
    } else {
      this.forceSolidNavbar = false;
      this.checkScroll();
    }

    // Update header style on route changes
    this.routeSubscription = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        if (
          e.urlAfterRedirects.startsWith('/aboutus') ||
          e.urlAfterRedirects.startsWith('/knowledgehub') ||
          e.urlAfterRedirects.startsWith('/itemDetails') ||
          e.urlAfterRedirects.startsWith('/oursolutions') ||
          e.urlAfterRedirects.startsWith('/bookappointment')
        ) {
          this.forceSolidNavbar = true;
          this.isScrolled = true;
        } else {
          this.forceSolidNavbar = false;
          this.checkScroll();
        }
      });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private updateTranslations(): void {
    this.mainNavItems = [
      { name: this.translationService.translate('nav.home'), path: '/' },
      {
        name: this.translationService.translate('nav.about'),
        path: '/aboutus',
      },
      {
        name: this.translationService.translate('nav.solutions'),
        path: '/oursolutions',
      },
      {
        name: this.translationService.translate('nav.education'),
        path: '/knowledgehub',
      },
      {
        name: this.translationService.translate('nav.science'),
        path: '/',
        fragment: 'methodology',
      },
      {
        name: this.translationService.translate('nav.contact'),
        path: '/',
        fragment: 'contact',
      },
    ];
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onNavItemClick(item: NavItem): void {
    // Active state is handled by isActive() binding in HTML
    this.closeMenu();

    if (item.fragment) {
      this.router.navigate([item.path], { fragment: item.fragment }).then(() => {
         this.scrollToSection('#' + item.fragment);
      });
    } else {
       // Navigate to path if no fragment (e.g. /aboutus)
       this.router.navigate([item.path]);
    }
  }

  isActive(item: NavItem): boolean {
    const options: any = {
      paths: 'exact',
      matrixParams: 'ignored',
      queryParams: 'ignored',
      fragment: item.fragment ? 'exact' : 'ignored',
    };

    // If matches Home '/' but item has fragment, we want strict fragment match.
    // If item has no fragment (Home), it will match /#contact if we use 'ignored'.
    // So for Home ('/'), we want to ensure we are NOT on a fragment?
    // Actually, usually Home is active even if scrolled?
    // The user issue: Science (/#methodology) is active on Home (/).
    // Reason: routerLinkActive sees '/' match.
    
    // With isActive:
    // Science: path='/', fragment='methodology'. Url='/', fragment=''. Match?
    // createUrlTree(['/'], {fragment: 'methodology'}) -> /#methodology.
    // Current Url: /. isActive(tree, fragment: exact) -> False. CORRECT.
    
    // Home: path='/', fragment=undefined. 
    // createUrlTree(['/']) -> /.
    // Current Url: /#methodology. 
    // isActive(tree, fragment: ignored) -> True. 
    // Wait, if I am on Science, Home should be active? Maybe.
    // But if I am on Home, Science should NOT be active.
    
    const urlTree = this.router.createUrlTree([item.path], {
      fragment: item.fragment,
    });

    return this.router.isActive(urlTree, options);
  }

  onBookAppointment(): void {
    this.closeMenu();
    this.router.navigate(['/appointment']);
    this.mainNavItems.forEach((navItem : any) => (navItem.active = false));
    this.contactNavItem.active = false;
  }

  private scrollToSection(href: string): void {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }

  onWindowResize(): void {
    if (window.innerWidth >= 768) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.forceSolidNavbar) {
      this.isScrolled = true;
      return;
    }
    this.checkScroll();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // Close mobile menu on window resize (when switching to desktop view)
    if (window.innerWidth >= 992) {
      this.isMobileMenuOpen = false;
    }
  }

  private checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}
