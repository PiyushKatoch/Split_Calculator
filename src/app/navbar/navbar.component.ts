import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() !== ''){
        this.route = location.path();
      } else {
        this.route = 'Udhari Saaf';
      }
      if (this.route === '/passbook'){
        this.route = 'Udhari Saaf';
      }
      else if (this.route === '/about'){
        this.route = 'About';
      }
      else if (this.route === '/plan'){
        this.route = 'Plan an Event';
      }
      else if (this.route === ''){
        this.route = 'Udhari Saaf';
      }
    });
  }

  ngOnInit(): void {
  }

}
