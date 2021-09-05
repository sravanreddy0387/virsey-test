import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WordSearchEffects } from './store/effects/word-search/word-search.effects';
import * as wordSearchReducer from './store/reducer/word-search/word-search.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { WordSearchModule } from './modules/word-search/word-searh-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({state: wordSearchReducer.reducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([WordSearchEffects]),
    HttpClientModule,
    WordSearchModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
