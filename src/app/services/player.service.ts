import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Player } from '../models/player';
import { GamesStore } from '../stores/games.store';
import { DiceRollService } from './dice-roll.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private _game!: Game;

  get player(): Player {
    return this._game.player;
  }

  constructor(
    private _gamesStore: GamesStore,
    private _diceRollService: DiceRollService
  ) {
    this._gamesStore.currentGame.subscribe((game) => {
      if (!game) {
        return;
      }

      this._game = game;
    });
  }

  initTraitsRandom() {
    this._game.player = Player.new(
      this._diceRollService.rollD6(1).asSum() + 6,
      this._diceRollService.rollD6(2).asSum() + 12,
      this._diceRollService.rollD6(1).asSum() + 6
    );
  }

  loseStamina(points: number = 2) {
    if (this.player.stamina.points - points < 0) {
      this.player.stamina.points = 0;
      return;
    }

    this.player.stamina.points += points;
  }
}
