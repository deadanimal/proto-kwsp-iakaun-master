import { Component, OnInit } from '@angular/core';
import { TabsetConfig } from 'ngx-bootstrap/tabs';

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class MyProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
