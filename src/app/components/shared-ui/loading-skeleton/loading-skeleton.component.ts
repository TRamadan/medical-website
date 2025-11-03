import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.css'],
})
export class LoadingSkeletonComponent {
  @Input() count: number = 1;
  @Input() appearance: '' | 'line' | 'circle' | 'custom-content' = 'line';
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() borderRadius: string = '4px';
  @Input() animation: 'pulse' | 'progress' | 'false' = 'pulse';

  get theme(): { [key: string]: string } {
    return {
      width: this.width,
      height: this.height,
      'border-radius': this.borderRadius,
    };
  }
}
