import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosComponent } from './exercicios.component';

describe('ExerciciosComponent', () => {
  let component: ExerciciosComponent;
  let fixture: ComponentFixture<ExerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciciosComponent]
    });
    fixture = TestBed.createComponent(ExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
