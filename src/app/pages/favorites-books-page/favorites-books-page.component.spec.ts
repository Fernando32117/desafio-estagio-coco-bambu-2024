import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesBooksPageComponent } from './favorites-books-page.component';

describe('FavoritesBooksPageComponent', () => {
  let component: FavoritesBooksPageComponent;
  let fixture: ComponentFixture<FavoritesBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesBooksPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
