import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User, AthleteProfile, InjuryRecord, AthleteAppointment } from '../models/user.model';

const STORAGE_KEY = 'sports_dr_user_session';

const INITIAL_DEMO_USER: User = {
  id: 'usr_athlete_99',
  fullName: 'Alex Rivers',
  email: 'alex.rivers@sportsdr.com',
  phone: '+1 (555) 234-5678',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  role: 'athlete',
  athleteProfile: {
    sport: 'Track & Field',
    positionOrEvent: '400m Hurdles / Sprint',
    clubTeam: 'Apex Performance Elite Club',
    experienceLevel: 'Professional',
    heightCm: 185,
    weightKg: 78,
    dateOfBirth: '1998-05-14',
    bloodType: 'O+',
    primaryHandFoot: 'Right',
    status: 'In Rehabilitation',
    bio: 'National 400m hurdles finalist focusing on explosive quad mobility recovery and high-velocity muscle endurance.',
    emergencyContact: {
      name: 'Sarah Rivers',
      relation: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    metrics: {
      heartRateBpm: 54,
      vo2Max: 68,
      recoveryScore: 88,
      flexibilityIndex: 82,
      strengthScore: 91
    },
    injuryHistory: [
      {
        id: 'inj_01',
        title: 'Right Hamstring Strain (Grade 2)',
        affectedArea: 'Hamstrings / Biceps Femoris',
        dateOccurred: '2026-06-12',
        status: 'Active Rehab',
        severity: 'Moderate',
        notes: 'Undergoing progressive eccentric loading protocol and biomechanical stride re-education.',
        rehabProgress: 75,
        attendingDoctor: 'Dr. Marcus Vance, MD'
      },
      {
        id: 'inj_02',
        title: 'Left Ankle Ligament Sprain',
        affectedArea: 'Ankle / ATFL',
        dateOccurred: '2025-10-04',
        status: 'Fully Recovered',
        severity: 'Minor',
        notes: 'Proprioception and lateral stability exercises successfully completed.',
        rehabProgress: 100,
        attendingDoctor: 'Dr. Elena Rostova'
      }
    ],
    upcomingAppointments: [
      {
        id: 'app_101',
        serviceName: 'High Performance Gait & Stride Evaluation',
        doctorName: 'Dr. Marcus Vance, MD',
        dateTime: '2026-08-15 T10:30:00',
        location: 'Central Sports Medicine Complex - Suite 4',
        status: 'Confirmed'
      },
      {
        id: 'app_102',
        serviceName: 'Neuromuscular Muscle Regeneration Therapy',
        doctorName: 'Dr. Sarah Lin',
        dateTime: '2026-08-22 T14:00:00',
        location: 'Rehab Center Wing B',
        status: 'Pending'
      }
    ]
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  // Signal State Management
  private currentUserSignal = signal<User | null>(this.loadUserFromStorage());
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  // Read-only Public Signals
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly authError = this.errorSignal.asReadonly();

  // Computed signals
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());
  readonly athleteProfile = computed(() => this.currentUserSignal()?.athleteProfile ?? null);
  readonly activeInjuriesCount = computed(() => {
    const profile = this.athleteProfile();
    if (!profile) return 0;
    return profile.injuryHistory.filter(inj => inj.status === 'Active Rehab').length;
  });

  private loadUserFromStorage(): User | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // If parsing fails, fall back to initial demo user
    }
    // Default to initial demo user for instant testing
    return INITIAL_DEMO_USER;
  }

  private saveUserToStorage(user: User | null): void {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  /**
   * Simulates authentication login
   */
  async login(email: string, pass: string): Promise<boolean> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    // Artificial network delay for crisp UI UX feel
    await new Promise(resolve => setTimeout(resolve, 600));

    if (!email || !pass) {
      this.errorSignal.set('Please provide both email and password.');
      this.loadingSignal.set(false);
      return false;
    }

    if (pass.length < 6) {
      this.errorSignal.set('Password must be at least 6 characters long.');
      this.loadingSignal.set(false);
      return false;
    }

    // Check if matching current stored or demo user email, else build a logged in athlete user
    const existing = this.currentUserSignal();
    const userToSet: User = existing && existing.email.toLowerCase() === email.toLowerCase()
      ? existing
      : {
          id: `usr_${Date.now()}`,
          email,
          fullName: email.split('@')[0].replace('.', ' ').toUpperCase(),
          phone: '+1 (555) 456-7890',
          avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
          role: 'athlete',
          athleteProfile: INITIAL_DEMO_USER.athleteProfile
        };

    this.currentUserSignal.set(userToSet);
    this.saveUserToStorage(userToSet);
    this.loadingSignal.set(false);
    return true;
  }

  /**
   * Fast demo login method for testing
   */
  async loginAsDemoAthlete(): Promise<void> {
    this.loadingSignal.set(true);
    await new Promise(resolve => setTimeout(resolve, 400));
    this.currentUserSignal.set(INITIAL_DEMO_USER);
    this.saveUserToStorage(INITIAL_DEMO_USER);
    this.loadingSignal.set(false);
    this.router.navigate(['/athlete-profile']);
  }

  /**
   * Registers a new user athlete account
   */
  async register(params: {
    fullName: string;
    email: string;
    phone: string;
    sport: string;
  }): Promise<boolean> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    await new Promise(resolve => setTimeout(resolve, 700));

    const newUser: User = {
      id: `usr_ath_${Date.now()}`,
      fullName: params.fullName,
      email: params.email,
      phone: params.phone || '+1 (555) 000-0000',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      role: 'athlete',
      athleteProfile: {
        sport: params.sport || 'General Athletics',
        positionOrEvent: 'Athlete',
        clubTeam: 'Independent Athlete',
        experienceLevel: 'Semi-Pro',
        heightCm: 178,
        weightKg: 72,
        dateOfBirth: '2000-01-01',
        bloodType: 'A+',
        primaryHandFoot: 'Right',
        status: 'Active',
        bio: `Professional ${params.sport || 'athlete'} dedicated to peak athletic recovery and performance training.`,
        emergencyContact: {
          name: 'Primary Contact',
          relation: 'Family',
          phone: params.phone || '+1 (555) 000-0000'
        },
        metrics: {
          heartRateBpm: 60,
          vo2Max: 62,
          recoveryScore: 92,
          flexibilityIndex: 85,
          strengthScore: 88
        },
        injuryHistory: [],
        upcomingAppointments: []
      }
    };

    this.currentUserSignal.set(newUser);
    this.saveUserToStorage(newUser);
    this.loadingSignal.set(false);
    return true;
  }

  /**
   * Update Athlete Profile
   */
  updateProfile(profileUpdates: Partial<AthleteProfile>, userUpdates?: Partial<User>): void {
    const current = this.currentUserSignal();
    if (!current) return;

    const updatedUser: User = {
      ...current,
      ...userUpdates,
      athleteProfile: {
        ...current.athleteProfile,
        ...profileUpdates
      }
    };

    this.currentUserSignal.set(updatedUser);
    this.saveUserToStorage(updatedUser);
  }

  /**
   * Add a new injury record to athlete history
   */
  addInjuryRecord(record: Omit<InjuryRecord, 'id'>): void {
    const current = this.currentUserSignal();
    if (!current) return;

    const newInjury: InjuryRecord = {
      ...record,
      id: `inj_${Date.now()}`
    };

    const updatedHistory = [newInjury, ...current.athleteProfile.injuryHistory];

    this.updateProfile({ injuryHistory: updatedHistory });
  }

  /**
   * Update injury progress percentage
   */
  updateInjuryProgress(injuryId: string, newProgress: number): void {
    const current = this.currentUserSignal();
    if (!current) return;

    const updatedHistory = current.athleteProfile.injuryHistory.map(inj => {
      if (inj.id === injuryId) {
        const isRecovered = newProgress >= 100;
        return {
          ...inj,
          rehabProgress: Math.min(100, Math.max(0, newProgress)),
          status: (isRecovered ? 'Fully Recovered' : 'Active Rehab') as InjuryRecord['status']
        };
      }
      return inj;
    });

    this.updateProfile({ injuryHistory: updatedHistory });
  }

  /**
   * Log out user
   */
  logout(): void {
    this.currentUserSignal.set(null);
    this.saveUserToStorage(null);
    this.router.navigate(['/auth/login']);
  }
}
