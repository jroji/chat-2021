import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { cleanUsers, saveUsers, setUser } from 'src/app/core/store/actions/users.actions';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  public users: User[] = [];

  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.store.select('users').subscribe((users) => {
      this.users = users.userList;
    })
  }

  public setActiveUser(user: User) {
    this.store.dispatch(setUser({ activeUser: user }));
  }

  public deleteUsers = () => {
    this.store.dispatch(cleanUsers());
  }

  public ngOnDestroy() {
  }
}
