import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.css'],
})
export class LoadingSkeletonComponent {
  @Input() shape: 'rectangle' | 'circle' = 'rectangle';
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() borderRadius?: string;
  @Input() count: number = 1;

  get skeletons(): any[] {
    return Array(this.count);
  }

  get skeletonStyle(): { [key: string]: string } {
    const style: { [key: string]: string } = {
      width: this.width,
      height: this.height,
    };
    if (this.borderRadius) {
      style['border-radius'] = this.borderRadius;
    }
    return style;
  }
}
