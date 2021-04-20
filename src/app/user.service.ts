import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Result } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://randomuser.me/api?results=5')
      .pipe(
        map((response: Result) => {
          return response.results;
        })
      )

      // .pipe(
      //   map((response: Record<'results', unknown>) => response.results)
      // );
  }
}
