import { createReducer, on } from '@ngrx/store';
import { addDadJoke, boopAdded, boopRemoved } from './boop.actions';

export const initialState = {
  count: 0,
  joke: '',
};

export const reducer = createReducer(
  initialState,
  on(boopAdded, (state) => ({ count: state.count + 1, joke: state.joke })),
  on(boopRemoved, (state) => {
    if (state.count - 1 <= 0) {
      return { count: 0, joke: state.joke };
    } else {
      return { count: state.count - 1, joke: state.joke };
    }
  }),
  on(addDadJoke, (state, action) => {
    return {
      count: state.count,
      joke: action.joke,
    };
  })
);
