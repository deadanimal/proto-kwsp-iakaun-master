import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPengeluaranComponent } from './e-pengeluaran.component';

describe('EPengeluaranComponent', () => {
  let component: EPengeluaranComponent;
  let fixture: ComponentFixture<EPengeluaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPengeluaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPengeluaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
