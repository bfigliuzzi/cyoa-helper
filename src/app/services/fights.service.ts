import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Enemy } from '../models/enemy';
import { Fight } from '../models/fight';
import { Game } from '../models/game';
import { Round } from '../models/round';
import { GamesStore } from '../stores/games.store';
import { DiceRollService } from './dice-roll.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root',
})
export class FightsService {
  private _game!: Game;

  get fights(): Fight[] {
    return this._game?.fights || [];
  }

  get currentFight(): Fight | null {
    if (!this.fights || this.fights.length === 0) {
      return null;
    }

    return this.fights[this.fights.length - 1];
  }

  constructor(
    private _gamesStore: GamesStore,
    private _playerService: PlayerService,
    private _diceRollService: DiceRollService
  ) {
    this._gamesStore.currentGame.subscribe((game) => {
      if (!game) {
        return;
      }
      this._game = game;
    });
  }

  addFight() {
    const newFight = { enemies: [], rounds: [] } as Fight;
    this.fights.push(newFight);
  }

  addEnemy(name: string, dexPoints: number, staPoints: number) {
    const enemy = Enemy.new(name, dexPoints, staPoints);
    this.currentFight?.enemies.push(enemy);
  }

  addRound(selectedEnemy: Enemy) {
    if (!this.currentFight) {
      return;
    }

    const roundId = this.getNextRoundId();

    const pfp = this.getFightPower(this._playerService.player);
    const round = Round.new(
      roundId,
      pfp,
      selectedEnemy.name,
      this.getFightPower(selectedEnemy)
    );

    if (round.result === 'DEFAITE') {
      this._playerService.loseStamina();
    } else if (round.result === 'VICTOIRE') {
      this.loseStamina(selectedEnemy);
    }

    this.currentFight.rounds.push(round);

    this.currentFight.enemies
      .filter((e) => e.name !== selectedEnemy.name)
      .forEach((e) => {
        const r = Round.new(roundId, pfp, e.name, this.getFightPower(e));
        if (r.result === 'DEFAITE') {
          this._playerService.loseStamina();
        } else if (r.result === 'VICTOIRE') {
          this.loseStamina(e);
        }
        this.currentFight?.rounds.push(r);
      });
  }

  getFightPower(character: Character) {
    return character.dexterity.points + this._diceRollService.rollD6(2).asSum();
  }

  loseStamina(character: Character, points: number = 2) {
    if (character.stamina.points - points < 0) {
      character.stamina.points = 0;
      return;
    }

    character.stamina.points += points;
  }

  private getNextRoundId() {
    if (!this.currentFight) {
      return 1;
    }

    return Math.max(...this.currentFight.rounds.map((r) => r.id)) + 1;
  }
}
