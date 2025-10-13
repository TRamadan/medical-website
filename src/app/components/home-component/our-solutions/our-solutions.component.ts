import { Component, OnInit } from '@angular/core';
import { TitleComponentComponent } from '../../shared-ui/title-component/title-component.component';
@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [TitleComponentComponent],
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.css'],
})
export class OurSolutionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
