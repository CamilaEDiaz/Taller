import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReservaComponent } from './consulta-reserva.component';

describe('ConsultaReservaComponent', () => {
  let component: ConsultaReservaComponent;
  let fixture: ComponentFixture<ConsultaReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
