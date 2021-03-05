import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

// such override allows to keep some initial values
 
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: false });
}

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.scss'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class ViewStatementComponent implements OnInit {

  isFirstOpen = true;
  
  constructor() { }

  ngOnInit() {
  }

}
