import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    InputTextareaModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initialiseContactUsForm();
  }

  /**
   * Developer : Tarek Ahmad Ramadan
   * Date : 25/5/2025
   * This function is responsible for inisialise contact us form
   */
  initialiseContactUsForm(): void {
    this.contactUsForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      message: [null, Validators.required],
    });
  }
}
