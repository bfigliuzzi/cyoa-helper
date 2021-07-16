import { Injectable } from '@angular/core';

@Injectable()
export class DiceRollService {
  private _result: number[] = [];

  rollD6(numberOfDice = 1): DiceRollService {
    return this.roll(1, 6, numberOfDice);
  }

  roll(min: number, max: number, numberOfDice = 1): DiceRollService {
    let localNumberOfDice = numberOfDice;

    while (localNumberOfDice-- !== 0) {
      this._result.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return this;
  }

  asTab(): number[] {
    const result = this._result;
    this.resetResult();
    return result;
  }

  asSum(): number {
    const sum = this._result.reduce((a, b) => a + b, 0);
    this.resetResult();
    return sum;
  }

  private resetResult() {
    this._result = [];
  }
}
