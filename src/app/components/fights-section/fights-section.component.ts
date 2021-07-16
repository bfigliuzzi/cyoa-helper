import { Component, OnInit } from '@angular/core';
import { Fight } from 'src/app/models/fight';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { GamesStore } from 'src/app/stores/games.store';

@Component({
  selector: 'fights-section',
  templateUrl: './fights-section.component.html',
})
export class FightsSectionComponent implements OnInit {
  game!: Game;

  constructor(private _gamesStore: GamesStore) {}

  ngOnInit(): void {
    this._gamesStore.currentGame.subscribe((game) => {
      if (!game) {
        return;
      }
      this.game = game;
    });
  }

  addFight() {}
}
