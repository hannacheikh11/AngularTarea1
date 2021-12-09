import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCuidadesComponent } from './listado-cuidades.component';

describe('ListadoCuidadesComponent', () => {
  let component: ListadoCuidadesComponent;
  let fixture: ComponentFixture<ListadoCuidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCuidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCuidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
