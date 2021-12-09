import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComidaComponent } from './listado-comida.component';

describe('ListadoComidaComponent', () => {
  let component: ListadoComidaComponent;
  let fixture: ComponentFixture<ListadoComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
