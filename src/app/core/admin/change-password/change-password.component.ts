import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "Your password has been changed!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

}
