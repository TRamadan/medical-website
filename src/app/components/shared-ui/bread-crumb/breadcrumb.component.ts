import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbService } from '../../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$!: Observable<any[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
}
