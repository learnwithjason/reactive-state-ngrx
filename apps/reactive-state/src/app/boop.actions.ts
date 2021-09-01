import { createAction, props } from '@ngrx/store';

export const boopAdded = createAction('[boop] added');
export const boopRemoved = createAction('[boop] removed');
export const addDadJoke = createAction(
  '[boop] add dad joke',
  props<{ joke: string }>()
);
