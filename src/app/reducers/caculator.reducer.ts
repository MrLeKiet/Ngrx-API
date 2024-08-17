import { createReducer, on } from '@ngrx/store';
import { addDigit, setOperator, calculateResult, clearCalculator } from '../action/caculator.action';

export interface CalculatorState {
  display: string;
  firstOperand: number | null;
  operator: string | null;
  waitingForSecondOperand: boolean;
}

export const initialState: CalculatorState = {
  display: '0',
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false,
};

export const calculatorReducer = createReducer(
  initialState,
  on(addDigit, (state, { digit }) => {
    if (state.waitingForSecondOperand) {
      return {
        ...state,
        display: digit,
        waitingForSecondOperand: false,
      };
    }
    return {
      ...state,
      display: state.display === '0' ? digit : state.display + digit,
    };
  }),
  on(setOperator, (state, { operator }) => {
    if (state.firstOperand === null && !state.waitingForSecondOperand) {
      return {
        ...state,
        firstOperand: parseFloat(state.display),
        operator,
        waitingForSecondOperand: true,
      };
    }

    if (state.operator && state.waitingForSecondOperand) {
      return {
        ...state,
        operator,
      };
    }

    return {
      ...state,
      firstOperand: calculate(state),
      operator,
      waitingForSecondOperand: true,
      display: calculate(state).toString(),
    };
  }),
  on(calculateResult, (state) => {
    if (state.operator && state.firstOperand !== null) {
      const result = calculate(state);
      return {
        ...state,
        display: result.toString(),
        firstOperand: result,
        operator: null,
        waitingForSecondOperand: false,
      };
    }
    return state;
  }),
  on(clearCalculator, () => initialState)
);

function calculate({ firstOperand, operator, display }: CalculatorState): number {
  const secondOperand = parseFloat(display);

  switch (operator) {
    case '+':
      return (firstOperand ?? 0) + secondOperand;
    case '-':
      return (firstOperand ?? 0) - secondOperand;
    case '*':
      return (firstOperand ?? 0) * secondOperand;
    case '/':
      return secondOperand !== 0 ? (firstOperand ?? 0) / secondOperand : 0;
    default:
      return secondOperand;
  }
}
