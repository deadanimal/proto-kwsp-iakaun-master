import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpananShariahStatusComponent } from './simpanan-shariah-status.component';

describe('SimpananShariahStatusComponent', () => {
  let component: SimpananShariahStatusComponent;
  let fixture: ComponentFixture<SimpananShariahStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpananShariahStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpananShariahStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
