import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, User } from '@shared/models/user.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  public users$ = new ReplaySubject<User[]>();
  public activeUser?: User;
  public activeUser$: Subject<User> = new Subject();

  constructor(private httpClient: HttpClient) {
    // this.users$.subscribe(users => window.localStorage.setItem('users', JSON.stringify(users)));
  }

  getUsers() {
    if (this.users$.observers.length === 0) {
     this.httpClient.get('https://randomuser.me/api?results=5')
      .pipe(
        map((response: Result) => {return response.results;
      }))
      .subscribe((users: User[]) => this.users$.next(users));
    }
    return this.users$;

      // .pipe(
      //   map((response: Record<'results', unknown>) => response.results)
      // );
  }

  public setUser(user: User) {
    this.activeUser = user;
    this.activeUser$.next(user);
  }
}
