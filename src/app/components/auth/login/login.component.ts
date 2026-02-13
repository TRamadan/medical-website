import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(event: Event): void {
    event.preventDefault(); // Prevent actual form submission
    this.router.navigate(['/']);
  }
} 