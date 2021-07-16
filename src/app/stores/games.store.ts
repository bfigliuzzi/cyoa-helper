import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../models/game';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GamesStore {
  private _currentGame!: BehaviorSubject<Game | null>;
  private _games: BehaviorSubject<Game[]>;

  currentGame: Observable<Game | null>;
  games: Observable<Game[]>;

  get hasCurrentGameSet(): boolean {
    return this._currentGame != null && this._currentGame.getValue() != null;
  }

  constructor(private _localStorage: LocalStorageService) {
    const games = this._localStorage.getData<Game[]>('games') || [];

    this._games = new BehaviorSubject<Game[]>(games);
    this.games = this._games.asObservable();

    const currentGame = games.length > 0 ? games[games.length - 1] : null;
    this._currentGame = new BehaviorSubject<Game | null>(currentGame);
    this.currentGame = this._currentGame.asObservable();
  }

  addGame(game: Game) {
    const newValue = [...this._games.value, game];
    this._games.next(newValue);
  }

  deleteGame(name: string) {
    const newValue = this._games.value.filter((g) => g.name !== name);
    this._games.next(newValue);
  }

  setCurrentGame(game: Game | null) {
    this._currentGame.next(game);
  }

  save() {
    const currentGame = this._currentGame.value;
    const games = this._games.value.filter((g) => g.name !== currentGame?.name);

    const updatedGames = [...games, currentGame as Game];
    this._games.next(updatedGames);

    this._localStorage.setData('games', updatedGames);
  }
}
