import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@shared/models/user.model';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { fetchUsers, saveUsers } from '../store/actions/users.actions';
@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public users: any = [];
  public activeUser?: User;
  protected readonly clearSubscription$ = new Subject();

  constructor(private store: Store<any>) {
    this.store.dispatch(fetchUsers());
    this.store.select('users')
      .pipe(takeUntil(this.clearSubscription$))
      .subscribe((users) => {
        this.users = users.userList;
        this.activeUser = users.activeUser;
      });
  }

  ngOnDestroy() {
    this.clearSubscription$.next();
    this.clearSubscription$.complete();
  }
}
