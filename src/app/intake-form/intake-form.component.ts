import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { QuestionnaireServiceService } from './services/questionnaire-service.service';
import {
  QuestionnaireAnswers,
  QuestionnaireGetDTO,
  ProblemDuration,
  ReferralSource,
  VisitObjective
} from './models/questionair.model';

interface ChoiceOption {
  label: string;
  value: string;
}

// --- Form value <-> API enum maps -------------------------------------
// Keeps the template's string-based p-selectButton values while the API
// speaks in integer enums.

const VISIT_GOAL_TO_ENUM: Record<string, VisitObjective> = {
  return_to_sport: VisitObjective.ReturnToSports,
  chronic_pain: VisitObjective.ChronicPain,
  performance: VisitObjective.ImprovedPerformance,
  prevention: VisitObjective.Prevention,
  other: VisitObjective.Other
};
const ENUM_TO_VISIT_GOAL: Record<number, string> = Object.fromEntries(
  Object.entries(VISIT_GOAL_TO_ENUM).map(([k, v]) => [v, k])
);

const DURATION_TO_ENUM: Record<string, ProblemDuration> = {
  lt_2_weeks: ProblemDuration.LessThan2Weeks,
  '2w_1m': ProblemDuration.TwoWeeksToMonth,
  '1_3m': ProblemDuration.OneToThreeMonths,
  gt_3m: ProblemDuration.MoreThan3Months,
  no_injury: ProblemDuration.NoProblem
};
const ENUM_TO_DURATION: Record<number, string> = Object.fromEntries(
  Object.entries(DURATION_TO_ENUM).map(([k, v]) => [v, k])
);

// NOTE: the API's ReferralSource enum has no "club" value and only
// supports a single source. "club" is dropped and hearAboutUs is now
// a single-select — see accompanying message for details.
const REFERRAL_TO_ENUM: Record<string, ReferralSource> = {
  instagram: ReferralSource.Instagram,
  facebook: ReferralSource.Facebook,
  tiktok: ReferralSource.TikTok,
  friend: ReferralSource.Friend,
  doctor_referral: ReferralSource.Doctor,
  google: ReferralSource.Google,
  other: ReferralSource.Other
};
const ENUM_TO_REFERRAL: Record<number, string> = Object.fromEntries(
  Object.entries(REFERRAL_TO_ENUM).map(([k, v]) => [v, k])
);

@Component({
  selector: 'app-intake-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectButtonModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.scss']
})
export class IntakeFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  // --- Page state -------------------------------------------------
  token: string | null = null;
  loading = true;
  loadErrorMessage: string | null = null;
  appointmentInfo: QuestionnaireGetDTO | null = null;

  submitting = false;
  submitSuccessMessage: string | null = null;
  submitErrorMessage: string | null = null;

  visitGoalOptions: ChoiceOption[] = [
    { label: 'العودة للرياضة', value: 'return_to_sport' },
    { label: 'ألم مزمن', value: 'chronic_pain' },
    { label: 'رفع الأداء', value: 'performance' },
    { label: 'الوقاية', value: 'prevention' },
    { label: 'أخرى', value: 'other' }
  ];

  problemDurationOptions: ChoiceOption[] = [
    { label: 'أقل من أسبوعين', value: 'lt_2_weeks' },
    { label: 'أسبوعين - شهر', value: '2w_1m' },
    { label: '1 - 3 أشهر', value: '1_3m' },
    { label: 'أكثر من 3 أشهر', value: 'gt_3m' },
    { label: 'لا توجد إصابة', value: 'no_injury' }
  ];

  yesNoOptions: ChoiceOption[] = [
    { label: 'نعم', value: 'yes' },
    { label: 'لا', value: 'no' }
  ];

  // single-select now — the API only stores one referral source
  sourceOptions: ChoiceOption[] = [
    { label: 'انستجرام', value: 'instagram' },
    { label: 'فيسبوك', value: 'facebook' },
    { label: 'تيك توك', value: 'tiktok' },
    { label: 'صديق', value: 'friend' },
    { label: 'توصية طبيب', value: 'doctor_referral' },
    { label: 'جوجل', value: 'google' },
    { label: 'أخرى', value: 'other' }
  ];

  // total number of primary questions, used to drive the progress indicator
  readonly totalSteps = 5;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private questionnaireService: QuestionnaireServiceService
  ) {
    this.form = this.fb.group({
      visitGoal: ['', Validators.required],
      visitGoalOther: [''],
      sportPracticed: ['', Validators.required],
      problemDuration: ['', Validators.required],
      hadPriorTreatment: ['', Validators.required],
      priorTreatmentDetails: [''],
      hearAboutUs: ['', Validators.required],
      hearAboutUsOther: ['']
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');

    if (!this.token) {
      this.loading = false;
      this.loadErrorMessage = 'الرابط غير صالح — الرمز مفقود.';
      return;
    }

    this.questionnaireService.getQuestionnaire(this.token).subscribe({
      next: (dto: any) => {
        this.appointmentInfo = dto;
        this.loading = false;

        if (dto.isAlreadyAnswered && dto.existing) {
          this.populateForm(dto.existing);
        }
      },
      error: (err: any) => {
        this.loading = false;
        this.loadErrorMessage = err?.friendlyMessage ?? 'تعذر تحميل الاستمارة.';
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  get showVisitGoalOther(): boolean {
    return this.f['visitGoal'].value === 'other';
  }

  get showPriorTreatmentDetails(): boolean {
    return this.f['hadPriorTreatment'].value === 'yes';
  }

  get showSourceOther(): boolean {
    return this.f['hearAboutUs'].value === 'other';
  }

  // rough progress estimate across the primary questions, drives the pulse indicator
  get completedSteps(): number {
    let count = 0;
    if (this.f['visitGoal'].value) count++;
    if (this.f['sportPracticed'].value) count++;
    if (this.f['problemDuration'].value) count++;
    if (this.f['hadPriorTreatment'].value) count++;
    if (this.f['hearAboutUs'].value) count++;
    return count;
  }

  private populateForm(existing: QuestionnaireAnswers): void {
    this.form.patchValue({
      visitGoal: ENUM_TO_VISIT_GOAL[existing.objective] ?? '',
      visitGoalOther: existing.objectiveOther ?? '',
      sportPracticed: existing.sport ?? '',
      problemDuration: ENUM_TO_DURATION[existing.duration] ?? '',
      hadPriorTreatment: existing.hasPreviousTreatment ? 'yes' : 'no',
      hearAboutUs: ENUM_TO_REFERRAL[existing.referralSource] ?? '',
      hearAboutUsOther: existing.referralSourceOther ?? ''
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitErrorMessage = null;

    if (this.form.invalid || !this.token) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: QuestionnaireAnswers = {
      objective: VISIT_GOAL_TO_ENUM[this.f['visitGoal'].value],
      objectiveOther: this.showVisitGoalOther ? this.f['visitGoalOther'].value || null : null,
      sport: this.f['sportPracticed'].value || null,
      duration: DURATION_TO_ENUM[this.f['problemDuration'].value],
      hasPreviousTreatment: this.f['hadPriorTreatment'].value === 'yes',
      referralSource: REFERRAL_TO_ENUM[this.f['hearAboutUs'].value],
      referralSourceOther: this.showSourceOther ? this.f['hearAboutUsOther'].value || null : null
    };

    this.submitting = true;
    this.questionnaireService.submitQuestionnaire(this.token, payload).subscribe({
      next: (res) => {
        this.submitting = false;
        this.submitSuccessMessage = res.message;
      },
      error: (err) => {
        this.submitting = false;
        this.submitErrorMessage = err?.friendlyMessage ?? 'تعذر إرسال الاستمارة.';
      }
    });
  }
}