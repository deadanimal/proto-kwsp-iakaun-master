import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEnquiryComponent } from './submit-enquiry.component';

describe('SubmitEnquiryComponent', () => {
  let component: SubmitEnquiryComponent;
  let fixture: ComponentFixture<SubmitEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
