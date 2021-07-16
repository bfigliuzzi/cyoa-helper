import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesStore } from 'src/app/stores/games.store';

@Component({
  selector: 'game-container',
  templateUrl: './game-container.component.html',
})
export class GameContainerComponent implements OnInit {
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
}
