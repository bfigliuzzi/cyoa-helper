import { Component, Input, OnInit } from '@angular/core';
import { Fight } from 'src/app/models/fight';

@Component({
  selector: 'fight-card',
  templateUrl: './fight-card.component.html',
})
export class FightCardComponent implements OnInit {
  @Input()
  fight!: Fight;

  enemyName: string | null = null;
  enemySta: number | null = null;
  enemyDex: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  addEnemy() {
    if (!this.fight) {
      return;
    }

    // this.fight.addEnemy(
    //   this.enemyName ?? (Math.random() * 100).toString().slice(0, 2),
    //   this.enemyDex ?? 0,
    //   this.enemySta ?? 0
    // );
    // this.enemyName = null;
    // this.enemyDex = null;
    // this.enemySta = null;
  }
}
