import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { LanguageService } from '../../../services/language.service';
import { TranslationService } from '../../../services/translation.service';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, CommonModule],
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
  contactNavItem: NavItem = { name: '', href: '' };

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
          e.urlAfterRedirects.startsWith('/education')
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
      { name: this.translationService.translate('nav.home'), href: '' },
      {
        name: this.translationService.translate('nav.about'),
        href: 'aboutus',
      },
      {
        name: this.translationService.translate('nav.superstars'),
        href: '#superstars',
      },
      {
        name: 'Education',
        href: 'education',
      },
      {
        name: this.translationService.translate('nav.science'),
        href: '#methodology',
      },
      {
        name: this.translationService.translate('nav.contact'),
        href: '#contact',
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
    this.mainNavItems.forEach((navItem) => (navItem.active = false));
    this.contactNavItem.active = false;
    item.active = true;

    this.closeMenu();

    if (item.href.startsWith('#')) {
      this.scrollToSection(item.href);
    } else if (item.href.startsWith('/')) {
      this.router.navigate([item.href]);
    }
  }

  onBookAppointment(): void {
    this.closeMenu();
    this.router.navigate(['/appointment']);
    this.mainNavItems.forEach((navItem) => (navItem.active = false));
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
