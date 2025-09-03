import { Component, HostListener, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { CommonModule } from '@angular/common';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponentComponent],
  selector: 'app-advisor-board',
  templateUrl: './advisor-board.component.html',
  styleUrls: ['./advisor-board.component.css'],
})
export class AdvisorBoardComponent implements OnInit {
  currentIndex = 0; // first visible slide index
  visibleItems = 3; // number of items per slide

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
  advisorDashBoardMembersChunk: any[][] = [];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    this.updateChunks(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateChunks(event.target.innerWidth);
  }

  private updateChunks(width: number) {
    let chunkSize = 3;
    if (width < 768) {
      chunkSize = 1; // mobile
    } else if (width < 992) {
      chunkSize = 2; // tablet
    }
    this.advisorDashBoardMembersChunk = this.chunkArray(
      this.advisorDashBoardMembers,
      chunkSize
    );
  }

  private chunkArray(arr: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}
