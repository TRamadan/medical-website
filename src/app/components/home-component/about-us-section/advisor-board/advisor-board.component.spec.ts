/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdvisorBoardComponent } from './advisor-board.component';

describe('AdvisorBoardComponent', () => {
  let component: AdvisorBoardComponent;
  let fixture: ComponentFixture<AdvisorBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdvisorBoardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
