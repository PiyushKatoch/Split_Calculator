import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  event: string;
  amount: number;
  num: number;
  i: number;
  ubal: number;
  uname: string;
  split: number;
  members = new Map<string, number>();
  balance = new Map<string, string>();
  dist = new Map<string, string>();
  arr = new Array();
  temp: number;

  getDetails(e: any, a: any, n: any, u: any, nam: any){
    const k = 1;
    this.event = e.value;
    this.amount = a.value;
    this.num = n.value;
    this.split = this.amount / (Number(this.num) + k);
    this.ubal = u.value;
    this.ubal = this.ubal - this.split;
    this.uname = nam.value;
    for (this.i = 0; this.i < this.num; ++this.i) {
       this.arr[this.i] = (this.i + 1);
    }
  }

  addMember(n: any, c: any){
    this.temp = c.value;
    this.temp = this.temp - this.split;
    this.members.set(n.value , Number(this.temp));
  }

  getBalance(){
    for (const j of this.members.entries()) {
      if (this.ubal < 0  && j[1] !== 0){
        if (j[1] > 0 && j[1] > Math.abs(this.ubal)){
          const tmp = this.ubal;
          this.members.set(j[0], (j[1] + this.ubal));
          this.ubal = 0;
          this.balance.set('You have to give ' + j[0] + ' a sum of ' + Math.abs(tmp) , '');
        }
        else if (j[1] > 0 && j[1] <= Math.abs(this.ubal)){
          this.members.set(j[0], 0);
          this.ubal = this.ubal + j[1];
          this.balance.set('You have to give ' + j[0] + ' a sum of ' + j[1] , '');
        }
      }
      else if (this.ubal > 0  && j[1] !== 0){
        if (j[1] < 0 && this.ubal > Math.abs(j[1])){
          this.members.set(j[0], 0);
          this.ubal = this.ubal + j[1];
          this.balance.set( j[0] + ' has to give you a sum of ' + Math.abs(j[1]) , '');
        }
        else if (j[1] < 0 && this.ubal <= Math.abs(j[1])){
          const tmp = this.ubal;
          this.members.set(j[0], this.ubal + j[1]);
          this.ubal = 0;
          this.balance.set( j[0] + ' has to give you a sum of ' + tmp, '');
        }
      }
      else if (this.ubal === 0){
        this.balance.set( 'All your Dues are clear' , '');
      }
   }
  }

  getDistribution(){
    for (const j of this.members.entries()){
      for (const k of this.members.entries()){
        if (j[0] !== k[0] && j[1] !== 0){
          if (j[1] < 0  && k[1] !== 0){
            if (k[1] > 0 && k[1] > Math.abs(j[1])){
              const tmp = j[1];
              this.members.set(k[0], (k[1] + j[1]));
              j[1] = 0;
              this.dist.set(j[0] + ' have to give ' + k[0] + ' a sum of ' + Math.abs(tmp) , '');
            }
            else if (k[1] > 0 && k[1] <= Math.abs(j[1])){
              this.members.set(k[0], 0);
              j[1] = j[1] + k[1];
              this.dist.set(j[0] + ' have to give ' + k[0] + ' a sum of ' + k[1] , '');
            }
          }
        else if (j[1] > 0  && k[1] !== 0){
          if (k[1] < 0 && j[1] > Math.abs(k[1])){
            this.members.set(k[0], 0);
            j[1] = j[1] + k[1];
            this.dist.set( k[0] + ' has to give ' + j[0] + ' a sum of ' + Math.abs(k[1]) , '');
          }
          else if (k[1] < 0 && j[1] <= Math.abs(k[1])){
            const tomp = j[1];
            this.members.set(k[0], j[1] + k[1]);
            j[1] = 0;
            this.dist.set( k[0] + ' has to give ' + j[0] + ' a sum of ' + tomp, '');
          }
        }
      }
      else if (j[1] === 0){
        this.dist.set( 'All  Dues of ' + j[0] + ' are now clear' , '');
      }
    }
   }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
