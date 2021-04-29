import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { fromEvent } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: any;
  public activeUser?: User;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.userService.activeUser$.subscribe(user => {
      this.activeUser = user;
    });
  }
}
