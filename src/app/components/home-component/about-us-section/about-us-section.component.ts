import { Component, OnInit } from '@angular/core';
interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
  certifications: string[];
}
@Component({
  standalone: true,
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css'],
})
export class AboutUsSectionComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Physiotherapist',
      specialization: 'Sports Injury & Orthopedic Rehabilitation',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      certifications: ['DPT', 'OCS', 'CSCS'],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Rehabilitation Specialist',
      specialization: 'Neurological & Spinal Rehabilitation',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      certifications: ['DPT', 'NCS', 'CBIS'],
    },
    {
      name: 'Dr. Emma Rodriguez',
      role: 'Exercise Physiologist',
      specialization: 'Movement Analysis & Corrective Exercise',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      certifications: ['MS', 'ACSM', 'FMS'],
    },
    {
      name: 'Dr. James Wilson',
      role: 'Pain Management Specialist',
      specialization: 'Chronic Pain & Manual Therapy',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      certifications: ['DPT', 'COMT', 'Cert.MDT'],
    },
  ];

  certifications: string[] = [
    'Licensed Physical Therapists (State Board Certified)',
    'American Physical Therapy Association (APTA) Members',
    'Continuing Education Units (CEU) Compliant',
    'HIPAA Compliance Certification',
    'CPR/AED Certified',
    'Telehealth Practice Certification',
    'Evidence-Based Practice Certification',
    'Patient Safety & Quality Improvement Certified',
  ];
}
