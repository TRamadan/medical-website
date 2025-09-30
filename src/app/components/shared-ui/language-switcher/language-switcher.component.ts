import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../../services/language.service';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent implements OnInit {
  currentLanguage: Language = 'en';

  constructor(
    private languageService: LanguageService,
    public translateService: TranslationService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  getLanguageText(): string {
    return this.currentLanguage === 'en' ? 'عربي' : 'EN';
  }
}
