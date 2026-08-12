export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
}

export interface PhysicalMetrics {
  heartRateBpm: number;
  vo2Max: number;
  recoveryScore: number; // 0-100%
  flexibilityIndex: number; // 0-100
  strengthScore: number; // 0-100
}

export interface InjuryRecord {
  id: string;
  title: string;
  affectedArea: string;
  dateOccurred: string;
  status: 'Fully Recovered' | 'Active Rehab' | 'Monitoring';
  severity: 'Minor' | 'Moderate' | 'Severe';
  notes: string;
  rehabProgress: number; // 0-100%
  attendingDoctor?: string;
}

export interface AthleteAppointment {
  id: string;
  serviceName: string;
  doctorName: string;
  dateTime: string;
  location: string;
  status: 'Confirmed' | 'Completed' | 'Pending';
}

export interface AthleteProfile {
  sport: string;
  positionOrEvent: string;
  clubTeam: string;
  experienceLevel: 'Professional' | 'Semi-Pro' | 'Collegiate' | 'Amateur';
  heightCm: number;
  weightKg: number;
  dateOfBirth: string;
  bloodType: string;
  primaryHandFoot: string;
  status: 'Active' | 'In Rehabilitation' | 'Off-Season' | 'Evaluation Required';
  bio: string;
  emergencyContact: EmergencyContact;
  metrics: PhysicalMetrics;
  injuryHistory: InjuryRecord[];
  upcomingAppointments: AthleteAppointment[];
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  avatarUrl: string;
  role: 'athlete' | 'doctor' | 'admin';
  athleteProfile: AthleteProfile;
}
