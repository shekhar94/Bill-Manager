import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  model;
  friendsList;
  billsList;
  constructor() {
    this.friendsList = JSON.parse(localStorage.getItem('friendsList'));
    if (!localStorage.getItem('billsList')) {
      localStorage.setItem('billsList', JSON.stringify([]));
      this.model = new Bill(1, '', 0, []);
    } else {
        this.billsList = JSON.parse(localStorage.getItem('billsList'));
        this.model = new Bill(this.billsList.length + 1, '', 0, []);
  }
  }

  ngOnInit() {
  }
  newBill() {
    const tmpList = JSON.parse(localStorage.getItem('billsList'));
    tmpList.push(this.model);
    this.billsList = tmpList;
    localStorage.setItem('billsList', JSON.stringify(tmpList));
    this.model = new Bill(this.model.id + 1, '', 0, []);
  }
}
