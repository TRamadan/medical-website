import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';

@Component({
  standalone: true,
  selector: 'app-advisor-board',
  templateUrl: './advisor-board.component.html',
  styleUrls: ['./advisor-board.component.css'],
})
export class AdvisorBoardComponent implements OnInit {
  advisorDashBoardMembers: any[] = [
    {
      name: 'Sara Samir',
      image: 'https://i.ibb.co/8x9xK4H/team.jpg',
      job: 'Doctor',
      jobDescription: 'Sports Medicine Specialist',
      description:
        'Passionate about building scalable, user-friendly applications with modern web technologies.',
    },
    {
      name: 'Ahmed Ali',
      image: 'https://i.ibb.co/8x9xK4H/team.jpg',
      job: 'Doctor',
      jobDescription: 'Sports Medicine Specialist',
      description:
        'Passionate about building scalable, user-friendly applications with modern web technologies.',
    },
    {
      name: 'Mona Khaled',
      image: 'https://i.ibb.co/8x9xK4H/team.jpg',
      job: 'Doctor',
      jobDescription: 'Sports Medicine Specialist',
      description:
        'Passionate about building scalable, user-friendly applications with modern web technologies.',
    },
    {
      name: 'Ahmed Ali',
      image: 'https://i.ibb.co/8x9xK4H/team.jpg',
      job: 'Doctor',
      jobDescription: 'Sports Medicine Specialist',
      description:
        'Passionate about building scalable, user-friendly applications with modern web technologies.',
    },
  ];
  constructor(public translationService: TranslationService) {}

  ngOnInit() {}
}
