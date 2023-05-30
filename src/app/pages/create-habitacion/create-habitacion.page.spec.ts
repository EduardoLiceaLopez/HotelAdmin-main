import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateHabitacionPage } from './create-habitacion.page';

describe('CreateHabitacionPage', () => {
  let component: CreateHabitacionPage;
  let fixture: ComponentFixture<CreateHabitacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateHabitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
