import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { LanguageService } from '../../../services/language.service';
import { TranslationService } from '../../../services/translation.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSwitcherComponent, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  private languageSubscription?: Subscription;

  mainNavItems: NavItem[] = [];
  contactNavItem: NavItem = { name: '', href: '' };

  constructor(
    private router: Router,
    private languageService: LanguageService,
    public translationService: TranslationService
  ) { }

  ngOnInit() {
    this.updateTranslations();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        this.updateTranslations();
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateTranslations(): void {
    this.mainNavItems = [
      { name: this.translationService.translate('nav.home'), href: '#home' },
      { name: this.translationService.translate('nav.about'), href: '#about' },
      {
        name: this.translationService.translate('nav.services'),
        href: '#services',
      },
      {
        name: this.translationService.translate('nav.howItWorks'),
        href: '#howitworks',
      },
      {
        name: this.translationService.translate('nav.education'),
        href: '#education',
      },
      {
        name: this.translationService.translate('nav.joinUs'),
        href: '#joinus',
      },
      {
        name: this.translationService.translate('nav.contact'),
        href: '#contact',
      },
      {
        name: this.translationService.translate('nav.bookAppointment'),
        href: '#booking',
      }
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
    this.scrollToSection(item.href);
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
}
