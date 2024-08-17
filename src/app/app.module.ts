import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { calculatorReducer } from './reducers/caculator.reducer';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    StoreModule.forRoot({calculator: calculatorReducer}),
    AppComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
