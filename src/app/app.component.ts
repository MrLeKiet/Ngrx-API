import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {ProfileService} from "./services/profile.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // display$: Observable<string>;
  //
  // constructor(private store: Store<{ calculator: CalculatorState }>) {
  //   this.display$ = store.select((state) => state.calculator.display);
  // }
  //
  // onDigit(digit: string) {
  //   this.store.dispatch(addDigit({ digit }));
  // }
  //
  // onOperator(operator: string) {
  //   this.store.dispatch(setOperator({ operator }));
  // }
  //
  // onCalculate() {
  //   this.store.dispatch(calculateResult());
  // }
  //
  // onClear() {
  //   this.store.dispatch(clearCalculator());
  // }

  constructor(public profileService: ProfileService) {
  }
}
