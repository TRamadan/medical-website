/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducationContentComponent } from './education-content.component';

describe('EducationContentComponent', () => {
  let component: EducationContentComponent;
  let fixture: ComponentFixture<EducationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
