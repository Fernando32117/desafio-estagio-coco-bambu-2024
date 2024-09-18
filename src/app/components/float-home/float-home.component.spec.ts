import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatHomeComponent } from './float-home.component';

describe('FloatHomeComponent', () => {
  let component: FloatHomeComponent;
  let fixture: ComponentFixture<FloatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatHomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FloatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
