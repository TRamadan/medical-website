import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 seconds

    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.isAuthPage = event.url.startsWith('/auth');
        this.handleScroll();
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.handleScroll(), 0);
  }

  private handleScroll(): void {
    const fragment = this.route.snapshot.fragment;

    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
