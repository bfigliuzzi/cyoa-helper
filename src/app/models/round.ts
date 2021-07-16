export class Round {
  id!: number;
  playerFightPower!: number;
  enemyFightPower!: number;
  enemyName!: string;

  result!: 'VICTOIRE' | 'DEFAITE' | 'EGALITE';

  static new(
    id: number,
    playerFightPower: number,
    enemyName: string,
    enemyFightPower: number
  ) {
    const round = Object.assign(new Round(), {
      id: id,
      playerFightPower: playerFightPower,
      enemyName: enemyName,
      enemyFightPower: enemyFightPower,
    });

    if (round.playerFightPower === round.enemyFightPower) {
      round.result = 'EGALITE';
    } else if (round.playerFightPower > round.enemyFightPower) {
      round.result = 'VICTOIRE';
    } else {
      round.result = 'DEFAITE';
    }

    return round;
  }
}
