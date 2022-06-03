import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiglightsComponent } from './higlights.component';

describe('HiglightsComponent', () => {
  let component: HiglightsComponent;
  let fixture: ComponentFixture<HiglightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiglightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiglightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
