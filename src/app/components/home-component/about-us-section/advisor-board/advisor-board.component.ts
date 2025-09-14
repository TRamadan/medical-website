import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { CommonModule } from '@angular/common';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { Advisorboard } from '../models/advisorboard';
import { environment } from '../../../../../environments/environment.development';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponentComponent],
  selector: 'app-advisor-board',
  templateUrl: './advisor-board.component.html',
  styleUrls: ['./advisor-board.component.css'],
})
export class AdvisorBoardComponent implements OnInit {
  @Input() data: Advisorboard[] = [];
  currentIndex = 0;
  visibleItems = 3;

  advisorDashBoardMembersChunk: any[][] = [];

  currentLang: 'en' | 'ar' = 'en';

  languageSubscription?: Subscription;

  public readonly imgUrl = environment.imgUrl;

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.updateChunks(window.innerWidth);
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      (lang: 'en' | 'ar') => {
        this.currentLang = lang;
      }
    );
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
    this.advisorDashBoardMembersChunk = this.chunkArray(this.data, chunkSize);
  }

  private chunkArray(arr: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}
