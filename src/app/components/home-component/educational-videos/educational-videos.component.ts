import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-educational-videos',
  templateUrl: './educational-videos.component.html',
  styleUrls: ['./educational-videos.component.css'],
})
export class EducationalVideosComponent implements OnInit {
  videos: any[] = [
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Understanding Your Injury',
      category: 'Education',
      duration: '5:30',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Basic Recovery Exercises',
      category: 'Exercise',
      duration: '8:45',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Pain Management Techniques',
      category: 'Treatment',
      duration: '6:20',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Preventing Re-injury',
      category: 'Prevention',
      duration: '7:15',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Nutrition for Recovery',
      category: 'Nutrition',
      duration: '9:10',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Mental Health & Recovery',
      category: 'Wellness',
      duration: '4:50',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Return to Activity',
      category: 'Recovery',
      duration: '6:35',
    },
    {
      thumbnail: 'https://placehold.co/600x400',
      title: 'Sleep & Healing',
      category: 'Wellness',
      duration: '5:45',
    },
  ];
  constructor() {}

  ngOnInit() {}

  watchVideo(selectedVideo: any, index: any): void {}

  viewAllContent(): void {}
}
