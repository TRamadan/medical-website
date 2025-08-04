/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NormalSuperStarComponent } from './normal-super-star.component';

describe('NormalSuperStarComponent', () => {
  let component: NormalSuperStarComponent;
  let fixture: ComponentFixture<NormalSuperStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalSuperStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalSuperStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
