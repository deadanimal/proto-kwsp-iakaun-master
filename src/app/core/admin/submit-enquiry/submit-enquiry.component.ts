import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from "sweetalert2";

@Component({
  selector: 'app-submit-enquiry',
  templateUrl: './submit-enquiry.component.html',
  styleUrls: ['./submit-enquiry.component.scss']
})
export class SubmitEnquiryComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }

  submit() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to save this?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.doneSubmit()
      }
    })
  }

  doneSubmit() {
    swal.fire({
      title: "Success",
      text: "The data have been saved!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

}
