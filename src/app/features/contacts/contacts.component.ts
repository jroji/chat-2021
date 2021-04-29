import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  public users: User[] = [];
  public subs: Subscription;

  constructor(
    private userService: UserService,
    @Inject('CONFIG') public config: string,
  ) {}

  public ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    this.subs.add(
      this.userService.activeUser$
        .subscribe((user) => {
          console.log("hello from contacts", user);
        })
      );
  }

  public setActiveUser(user: User) {
    this.userService.setUser(user);
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
