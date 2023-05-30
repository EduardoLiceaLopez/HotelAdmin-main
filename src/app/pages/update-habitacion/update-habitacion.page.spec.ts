import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateHabitacionPage } from './update-habitacion.page';

describe('UpdateHabitacionPage', () => {
  let component: UpdateHabitacionPage;
  let fixture: ComponentFixture<UpdateHabitacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateHabitacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
