import { Component } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messagesFromApp: string[] = [];
  public users: any;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  pushMessage($event) {
    this.messagesFromApp = [...this.messagesFromApp, $event];
  }
}
