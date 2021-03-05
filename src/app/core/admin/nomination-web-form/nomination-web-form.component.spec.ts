import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationWebFormComponent } from './nomination-web-form.component';

describe('NominationWebFormComponent', () => {
  let component: NominationWebFormComponent;
  let fixture: ComponentFixture<NominationWebFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationWebFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationWebFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
