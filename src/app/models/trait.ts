export class Trait {
  startingPoints!: number;
  points!: number;
  name!: string;

  constructor() {}

  static new(name: string, startingPoints: number) {
    const trait = Object.assign(new Trait(), {
      name,
      startingPoints,
      points: startingPoints
    });

    return trait;
  }
}
