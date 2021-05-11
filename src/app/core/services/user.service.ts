import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result, User } from '@shared/models/user.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('https://randomuser.me/api?results=5')
      .pipe(map((response: Result) => { return response.results; }))
  }
}
