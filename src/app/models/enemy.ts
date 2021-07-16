import { Character } from './character';
import { Trait } from './trait';

export class Enemy implements Character {
  dexterity!: Trait;
  stamina!: Trait;
  name!: string;

  static new(
    name: string,
    dexStartingPoints: number,
    staStartingPoint: number
  ) {
    const enemy = Object.assign(new Enemy(), {
      name,
      dexterity: Trait.new('Habileté', dexStartingPoints),
      stamina: Trait.new('Endurance', staStartingPoint),
    } as Enemy);

    return enemy;
  }
}
