import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedBooksPageComponent } from './saved-books-page.component';

describe('SavedBooksPageComponent', () => {
  let component: SavedBooksPageComponent;
  let fixture: ComponentFixture<SavedBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedBooksPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
