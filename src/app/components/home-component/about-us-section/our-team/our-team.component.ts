import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TranslationService } from '../../../../services/translation.service';
import { Teammembers } from '../models/teammembers';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../../services/language.service';
import { TitleComponentComponent } from '../../../shared-ui/title-component/title-component.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [TitleComponentComponent, CommonModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
})
export class OurTeamComponent implements OnInit {
  @Input() data: Teammembers[] = [];
  teamMembersChunk: any[][] = [];

  currentLang: 'en' | 'ar' = 'en';
  languageSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    public languageService: LanguageService
  ) {}

  ngOnInit() {
    this.updateChunks(window.innerWidth); // ✅ responsive عند أول تحميل

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
    let chunkSize = 3; // default large screens

    if (width < 768) {
      chunkSize = 1; // mobile
    } else if (width < 992) {
      chunkSize = 2; // tablet
    }

    this.teamMembersChunk = this.chunkArray(this.data, chunkSize);
  }

  private chunkArray(arr: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
}
