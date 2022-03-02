import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherlibComponent } from './weatherlib.component';

describe('WeatherlibComponent', () => {
  let component: WeatherlibComponent;
  let fixture: ComponentFixture<WeatherlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherlibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
