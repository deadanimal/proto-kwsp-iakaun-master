import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNominationStatusComponent } from './view-nomination-status.component';

describe('ViewNominationStatusComponent', () => {
  let component: ViewNominationStatusComponent;
  let fixture: ComponentFixture<ViewNominationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNominationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNominationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
