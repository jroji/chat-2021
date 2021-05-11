import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';

export const saveUsers = createAction(
  '[Users] Save',
  props<{ usersList: User[] }>()
);
export const setUser = createAction(
  '[Users] Save',
  props<{ activeUser: User }>()
);
export const fetchUsers = createAction('[Users] Fetch');
export const cleanUsers = createAction('[Users] Clean');
