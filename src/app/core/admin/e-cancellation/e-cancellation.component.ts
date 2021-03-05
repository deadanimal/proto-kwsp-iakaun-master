import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-e-cancellation',
  templateUrl: './e-cancellation.component.html',
  styleUrls: ['./e-cancellation.component.scss']
})
export class ECancellationComponent implements OnInit {

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      submitDate: "01-01-2020",
      type: "i-Lestari",
      payment: "Monthly Payment",
      refer: "LESTARI26093218",
      submitChannel: "Online",
      amount: "",
      status: "approved",
      approvedDate: "12-01-2020"
    },
  ];
  SelectionType = SelectionType;

  constructor() {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

  ngOnInit() {
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {

      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to cancel this?",
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
      title: "Successful cancelled",
      //text: "Your password has been changed!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }

}
