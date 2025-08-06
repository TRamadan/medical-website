import { Component, OnInit } from '@angular/core';
import { SuccessVideosComponent } from './success-videos/success-videos.component';
import { CustomersSuccessStoriesComponent } from './customers-success-stories/customers-success-stories.component';
@Component({
  standalone: true,
  imports: [SuccessVideosComponent, CustomersSuccessStoriesComponent],
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css'],
})
export class SuccessStoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
