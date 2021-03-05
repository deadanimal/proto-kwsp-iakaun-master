import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {
  Router,
} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  myInterval = 2000;
  activeSlideIndex = 0;
 
  slides = [
    {image: 'assets/img/theme/kwsp-syariah.jpg'},
    {image: 'assets/img/theme/kwsp-nomination.jpg'},
    {image: 'assets/img/theme/img-1-1000x600.jpg'}
  ];
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigatePage(path: String) {
    if (path == "notifications") {
      return this.router.navigate(["/global/notifications"]);
    } else if (path == "login") {
      return this.router.navigate(["/auth/login"]);
    } else if (path == "register") {
      return this.router.navigate(["/auth/register"]);
    } else if (path == "home") {
      return this.router.navigate(["/auth/login"]);
    }
  }

}
