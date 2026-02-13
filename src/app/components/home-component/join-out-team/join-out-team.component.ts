import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../services/translation.service';
import { LanguageService } from '../../../services/language.service';
import { Subscription } from 'rxjs';

interface PastIntern {
  name: string;
  currentRole: string;
  internshipYear: string;
  image: string;
}

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  education: string;
  coverLetter: string;
  resume?: File;
}
@Component({
  selector: 'app-join-out-team',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join-out-team.component.html',
  styleUrls: ['./join-out-team.component.css'],
})
export class JoinOutTeamComponent implements OnInit, OnDestroy {
  private languageSubscription?: Subscription;

  applicationData: ApplicationData = {
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
  };

  pastInterns: PastIntern[] = [
    {
      name: 'Sarah Johnson',
      currentRole: 'Senior Physiotherapist at RehabTech',
      internshipYear: '2023',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      currentRole: 'Sports Medicine Specialist',
      internshipYear: '2022',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Emma Rodriguez',
      currentRole: 'Digital Health Coordinator',
      internshipYear: '2023',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  positions: any[] = [];
  experienceLevels: any[] = [];

  constructor(
    public translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.updateDropdowns();
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(
      () => {
        this.updateDropdowns();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private updateDropdowns(): void {
    this.positions = [
      { value: 'physiotherapist', label: this.translationService.translate('joinOurTeam.form.positions.physiotherapist') },
      { value: 'sports-medicine', label: this.translationService.translate('joinOurTeam.form.positions.sportsMedicine') },
      { value: 'occupational-therapist', label: this.translationService.translate('joinOurTeam.form.positions.occupationalTherapist') },
      { value: 'fitness-coach', label: this.translationService.translate('joinOurTeam.form.positions.fitnessCoach') },
      { value: 'intern', label: this.translationService.translate('joinOurTeam.form.positions.intern') },
      { value: 'admin', label: this.translationService.translate('joinOurTeam.form.positions.admin') },
    ];

    this.experienceLevels = [
      { value: 'entry', label: this.translationService.translate('joinOurTeam.form.experienceLevels.entry') },
      { value: 'mid', label: this.translationService.translate('joinOurTeam.form.experienceLevels.mid') },
      { value: 'senior', label: this.translationService.translate('joinOurTeam.form.experienceLevels.senior') },
      { value: 'expert', label: this.translationService.translate('joinOurTeam.form.experienceLevels.expert') },
      { value: 'student', label: this.translationService.translate('joinOurTeam.form.experienceLevels.student') },
    ];
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.applicationData.resume = file;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      alert(this.translationService.translate('joinOurTeam.form.alerts.success'));
      this.resetForm();
    } else {
      alert(this.translationService.translate('joinOurTeam.form.alerts.error'));
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.applicationData.fullName &&
      this.applicationData.email &&
      this.applicationData.phone &&
      this.applicationData.position
    );
  }

  private resetForm(): void {
    this.applicationData = {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      education: '',
      coverLetter: '',
    };
  }
}
