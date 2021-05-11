import { createReducer, on } from '@ngrx/store';
import { saveUsers, cleanUsers, setUser } from '../actions/users.actions';

export const initialState = {
  userList: [],
  activeUser: undefined
};

export const usersReducer = createReducer(
   initialState,
   on(saveUsers, (state, action) => ({ ...state, userList: action.usersList })),
   on(setUser, (state, action) => ({ ...state, activeUser: action.activeUser  })),
   on(cleanUsers, (state, action) => ({ ...initialState })),
);
