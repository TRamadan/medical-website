/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VipSuperStarsComponent } from './vip-super-stars.component';

describe('VipSuperStarsComponent', () => {
  let component: VipSuperStarsComponent;
  let fixture: ComponentFixture<VipSuperStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipSuperStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipSuperStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
