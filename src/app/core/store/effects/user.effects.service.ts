import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { fetchUsers, saveUsers } from '../actions/users.actions';

@Injectable()
export class UserEffectsService {

  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fetchUsers.type),
    switchMap(() => this.userService.getUsers()),
    map((users) => saveUsers({ usersList: users }))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}
}
