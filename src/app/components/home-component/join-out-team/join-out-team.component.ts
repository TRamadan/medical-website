import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class JoinOutTeamComponent implements OnInit {
  ngOnInit(): void {}
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

  positions = [
    { value: 'physiotherapist', label: 'Physiotherapist' },
    { value: 'sports-medicine', label: 'Sports Medicine Specialist' },
    { value: 'occupational-therapist', label: 'Occupational Therapist' },
    { value: 'fitness-coach', label: 'Fitness Coach' },
    { value: 'intern', label: 'Internship Program' },
    { value: 'admin', label: 'Administrative Role' },
  ];

  experienceLevels = [
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-5 years)' },
    { value: 'senior', label: 'Senior Level (6-10 years)' },
    { value: 'expert', label: 'Expert Level (10+ years)' },
    { value: 'student', label: 'Student/Recent Graduate' },
  ];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.applicationData.resume = file;
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Application submitted:', this.applicationData);
      alert('Application submitted successfully! We will contact you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
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
