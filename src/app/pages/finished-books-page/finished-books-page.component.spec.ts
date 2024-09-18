import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedBooksPageComponent } from './finished-books-page.component';

describe('FinishedBooksPageComponent', () => {
  let component: FinishedBooksPageComponent;
  let fixture: ComponentFixture<FinishedBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishedBooksPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishedBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
