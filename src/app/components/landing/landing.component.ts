import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { DiceRollService } from 'src/app/services/dice-roll.service';
import { GamesStore } from 'src/app/stores/games.store';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  gameName?: string;

  games: Game[] = [];
  selectedGame?: Game;

  constructor(
    private _gamesStore: GamesStore,
    private _diceRollService: DiceRollService
  ) {}

  ngOnInit(): void {
    this._gamesStore.games.subscribe((games) => (this.games = games));
  }

  startGame() {
    if (this.selectedGame && this.selectedGame) {
      this._gamesStore.setCurrentGame(this.selectedGame);
      return;
    }

    const game = Game.new(this.gameName || '', new Player(), []);

    this._gamesStore.addGame(game);
    this._gamesStore.setCurrentGame(game);
    this._gamesStore.save();
  }

  selectedGameChanged(game: Game) {
    this.selectedGame = game;
  }
}
