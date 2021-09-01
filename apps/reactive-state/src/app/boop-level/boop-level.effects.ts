import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { addDadJoke } from '../boop.actions';

@Injectable()
export class BoopLevelEffects {
  constructor(private store: Store, private actions$: Actions) {}

  dadJoke = '';

  makeDadJoke = createEffect(
    () => {
      return this.actions$.pipe(
        concatLatestFrom(() => {
          return this.store.select((state: any) => state.boops);
        }),
        tap(([, boops]) => {
          if (boops.count < 10) {
            return;
          }

          fetch('https://icanhazdadjoke.com/', {
            headers: {
              Accept: 'application/json',
            },
          })
            .then((res) => res.json())
            .then((response) => {
              this.store.dispatch(
                addDadJoke({
                  joke: response.joke,
                })
              );
            });
        })
      );
    },
    { dispatch: false }
  );
}
