import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-summary',
  templateUrl: './balance-summary.component.html',
  styleUrls: ['./balance-summary.component.css']
})
export class BalanceSummaryComponent {
  billsList;
  friendsList;
  balanceSummary = [];
  friendsMap = {};
  constructor() {
    this.friendsList = JSON.parse(localStorage.getItem('friendsList'));
    this.billsList = JSON.parse(localStorage.getItem('billsList'));
    this.createFriendsMap();
    this.calculateBalanceSummary();
    this.createSummary();
   }
   createFriendsMap() {
     this.friendsList.slice().forEach(friend => {
        this.friendsMap[friend.id] = {...friend, balance: 0};
       });
   }
   calculateBalanceSummary() {
     this.billsList.forEach(bill => {
      const share = Number(bill.amount) / bill.friends.length;
      this.friendsMap[bill.paidBy.id].balance +=  Number(bill.amount);

       bill.friends.slice().forEach(friend => {
          this.friendsMap[friend.id].balance -= share;
       });
     });
   }
   createSummary() {
     const keys = Object.keys(this.friendsMap);
     for (let i = 0; i < keys.length; i++) {
       this.balanceSummary.push(this.friendsMap[keys[i]]);
     }
   }
}
