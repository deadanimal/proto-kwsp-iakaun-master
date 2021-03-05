import { Component, OnInit, NgZone, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import swal from "sweetalert2";

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-withdrawal-history',
  templateUrl: './withdrawal-history.component.html',
  styleUrls: ['./withdrawal-history.component.scss']
})
export class WithdrawalHistoryComponent implements OnInit {

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      submitDate: "01-01-2020",
      type: "i-Lestari",
      office: "Pusat Prosesan",
      refer: "LESTARI26093218",
      submitChannel: "Online",
      amount: "200",
      status: "approved",
      status1: "approved",
      approvedDate: "12-01-2020",
      payName: "Ali Imran",
      paymentMode: "Direct Debit",
      startDate: "06 May 2020",
      endDate: "05 Apr 2021",
      date: "01 Jan 2021"
    },
  ];
  SelectionType = SelectionType;

  //modal
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,Object.assign({}, { class: 'modal-xl' }));
  }

}
