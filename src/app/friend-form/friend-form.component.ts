import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})
export class FriendFormComponent implements OnInit {
  model;
  friendsList;
  ngOnInit() {
      if (!localStorage.getItem('friendsList')) {
        localStorage.setItem('friendsList', JSON.stringify([]));
        this.model = new Friend(1, '', '');
      } else {
          this.friendsList = JSON.parse(localStorage.getItem('friendsList'));
          this.model = new Friend(this.friendsList.length + 1, '', '');
    }
  }
  newFriend() {
    const tmpList = JSON.parse(localStorage.getItem('friendsList'));
    tmpList.push(this.model);
    this.friendsList = tmpList;
    localStorage.setItem('friendsList', JSON.stringify(tmpList));
    this.model = new Friend(this.model.id + 1, '', '');
  }

}
