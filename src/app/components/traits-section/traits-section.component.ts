import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { GamesStore } from 'src/app/stores/games.store';

@Component({
  selector: 'traits-section',
  templateUrl: './traits-section.component.html',
})
export class TraitsSectionComponent implements OnInit {
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
