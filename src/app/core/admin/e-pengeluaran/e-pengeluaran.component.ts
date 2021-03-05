import { Component, OnInit, TemplateRef } from '@angular/core';
import swal from "sweetalert2";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-e-pengeluaran',
  templateUrl: './e-pengeluaran.component.html',
  styleUrls: ['./e-pengeluaran.component.scss']
})
export class EPengeluaranComponent implements OnInit {

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

  //modal
  modalRef: BsModalRef;

  //stepper
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor(
    private modalService: BsModalService,
    private _formBuilder: FormBuilder
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal-xl' }));
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
    this.modalRef.hide()
  }

}
