import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFloresComponent } from './listado-flores.component';

describe('ListadoFloresComponent', () => {
  let component: ListadoFloresComponent;
  let fixture: ComponentFixture<ListadoFloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFloresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
