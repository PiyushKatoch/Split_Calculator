import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  event: string;
  date: string;
  minamount: number;
  maxamount: number;
  num: number;
  i: number;
  split: number;
  detail = new Map<string, string>();
  ed = new Map<string, string>();
  arr = new Array();
  temp: number;

  createEvent(e: any, d: any, mi: any, mx: any, n: any){
    const k = 1;
    this.event = e.value;
    this.date = d.value;
    this.minamount = mi.value;
    this.maxamount = mx.value;
    this.num = n.value;
    this.split = (((Number(this.minamount) + Number(this.maxamount)) / 2) / (Number(this.num)));
    for (this.i = 0; this.i < this.num; ++this.i) {
       this.arr[this.i] = (this.i + 1);
    }
  }

  geted(){
    this.ed.set('Event Name : ', this.event );
    this.ed.set('Event Date : ', this.date );
    this.ed.set('Group  Strenght', '' + this.num );
    this.ed.set('Individual Budget', '' + (this.split));

  }



  addMember(n: any){
    this.detail.set(n.value, '' );
  }

  constructor() { }

  ngOnInit(): void {

  }

}
