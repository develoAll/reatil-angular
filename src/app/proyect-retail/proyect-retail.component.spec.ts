import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectRetailComponent } from './proyect-retail.component';

describe('ProyectRetailComponent', () => {
  let component: ProyectRetailComponent;
  let fixture: ComponentFixture<ProyectRetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectRetailComponent]
    });
    fixture = TestBed.createComponent(ProyectRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
