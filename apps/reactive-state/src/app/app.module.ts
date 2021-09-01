import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducer } from './boop.reducer';
import { BoopLevelComponent } from './boop-level/boop-level.component';
import { EffectsModule } from '@ngrx/effects';
import { BoopLevelEffects } from './boop-level/boop-level.effects';

@NgModule({
  declarations: [AppComponent, BoopLevelComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ boops: reducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BoopLevelEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
