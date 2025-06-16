import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface NavItem {
  name: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  navItems: NavItem[] = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How it works', href: '#howitworks' },
    {
      name: 'Education',
      href: '#education',
    },
    {
      name: 'Join us',
      href: '#joinus',
    },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onNavItemClick(item: NavItem): void {
    // Set active item
    this.navItems.forEach((navItem) => (navItem.active = false));
    item.active = true;

    // Close mobile menu
    this.closeMenu();

    // Optional: Add smooth scrolling logic here
    this.scrollToSection(item.href);
  }

  onBookAppointment(): void {
    // Handle appointment booking logic
    console.log('Book appointment clicked');
    this.closeMenu();

    // You can add routing or modal logic here
    this.router.navigate(['/appointment']);
    // or open a modal, etc.
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

  // Optional: Handle window resize to close mobile menu
  onWindowResize(): void {
    if (window.innerWidth >= 768) {
      this.isMenuOpen = false;
    }
  }
}
