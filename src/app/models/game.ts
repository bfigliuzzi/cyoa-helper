import { Fight } from './fight';
import { Player } from './player';

export class Game {
  name!: string;
  player!: Player;
  fights!: Fight[];

  constructor() {}

  static new(name: string, player: Player, fights: Fight[] = []) {
    const game = Object.assign(new Game(), {
      name,
      player,
      fights
    } as Game);

    return game;
  }
}
