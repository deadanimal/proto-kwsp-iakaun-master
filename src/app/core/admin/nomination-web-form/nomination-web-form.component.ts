import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import swal from "sweetalert2";

@Component({
  selector: 'app-nomination-web-form',
  templateUrl: './nomination-web-form.component.html',
  styleUrls: ['./nomination-web-form.component.scss']
})
export class NominationWebFormComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
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
