import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { boopAdded, boopRemoved } from './boop.actions';

@Component({
  selector: 'reactive-state-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select((state: any) => state.boops.count)
      .subscribe((value) => {
        this.count = value;
      });
  }

  addBoop() {
    this.store.dispatch(boopAdded());
  }

  removeBoop() {
    this.store.dispatch(boopRemoved());
  }
}
