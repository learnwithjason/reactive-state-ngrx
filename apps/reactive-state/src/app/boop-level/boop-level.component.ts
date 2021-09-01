import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'reactive-state-ngrx-boop-level',
  templateUrl: './boop-level.component.html',
  styleUrls: ['./boop-level.component.css'],
})
export class BoopLevelComponent implements OnInit {
  level!: Observable<string>;
  joke = this.store.select((state: any) => state.boops.joke);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.level = this.store
      .select((state: any) => state.boops)
      .pipe(
        map((boopCount) => {
          if (boopCount <= 5) {
            return 'low';
          } else if (boopCount >= 15) {
            return 'high';
          } else {
            return 'average';
          }
        })
      );
  }
}
