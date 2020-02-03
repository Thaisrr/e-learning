import {Level} from './level';

export class Game {
  name: string;
  explication: string;
  levels: Level[];

  constructor(name: string) {
    this.name = name;
  }

}

