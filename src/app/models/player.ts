import { Character } from './character';
import { Trait } from './trait';

export class Player implements Character {
  dexterity!: Trait;
  stamina!: Trait;
  chance!: Trait;
  will!: Trait;

  static new(
    dexStartingPoints: number,
    staStartingPoints: number,
    chaStartingPoints: number
  ) {
    const player = Object.assign(new Player(), {
      dexterity: Trait.new('Habileté', dexStartingPoints),
      stamina: Trait.new('Endurance', staStartingPoints),
      chance: Trait.new('Chance', chaStartingPoints),
      will: Trait.new('Volonté', 6),
    } as Player);

    return player;
  }
}
