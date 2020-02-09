import { Injectable } from '@angular/core';
import {Game} from '../Classes/game';
import {Level} from '../Classes/level';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: Game;

  constructor() { }

  check(asw: string, lvl: number, pts: number): boolean {
    lvl += 1;
    if (this.game.levels.length > lvl) {
      this.play(lvl);
    } else {
      this.finish(pts);
      return false;
    }
    if (asw === this.game.levels[lvl - 1].answer ) {
      pts += 1;
      return true;
    } else {
      return false;
    }
  }
  play(lvl: number) {
    if (lvl < this.game.levels.length) {
      // TODO something here
    }
  }

  finish(pts: number) {
    const score = (pts * 100) / this.game.levels.length;
    alert(`You have ${score}% de bonnes réponses ! `);
  }

  generateFlexGame(): Game {
    this.game = new Game('Flex Dragons');
    this.game.explication = 'A l\'aide des FlexBox, débarassez-vous des dragons en les faisant tomber dans les trous. ' +
      'Complétez le code : display: flex;';
    const lvl1 = new Level('justify-content: right;', 'Complétez le code suivant : ', 'div { display: flex; }' , 1, false);
    const lvl2 = new Level('justify-content: center;', 'Complétez le code suivant : ', 'div { display: flex; }' , 2, false);
    const lvl3 = new Level('justify-content: space-between;', 'Complétez le code suivant : ', 'div { display: flex; }' , 3, false);
    const lvl4 = new Level('justify-content: space-around;', 'Complétez le code suivant : ', 'div { display: flex; }' , 2, false);
    const lvl5 = new Level('justify-content: left;', 'Complétez le code suivant : ', 'div { display: flex; }' , 1, false);
    this.game.levels = [ lvl1, lvl2, lvl3, lvl4, lvl5];
    return this.game;
  }

  generateSelectorGame() {
    this.game = new Game('Selectors Game');
    /*
    QuizLevel : nom de selecteur, question, code
    On affiche la question, les divs correspondantes.
     */
    this.game.explication = 'A l\'aide des sélecteurs CSS, saisissez-vous des armes demandées';
    const lvl1 = new Level('div', 'Les deux dagues',
      '<div class="weapon"></div> \n <div></div> \n <div></div> \n <div class="weapon"></div>',
      4, false);
    lvl1.importantDiv = [1, 2, 3, 4];
    const lvl2 = new Level('weapon', ' ',
      '<div class=".weapon"></div> \n <div></div> \n <div></div> \n <div class="weapon"></div>',
      4, false);
    lvl2.importantDiv = [1, 4];
    const lvl3 = new Level('weapon', 'Complétez le code suivant : ',
      '<div class="#weapon"> \n <div></div>  \n </div> \n <div class="weapon"></div> <div id="weapon"></div>' ,
      4, false);
    lvl3.importantDiv = [4];
    const lvl4 = new Level('.weapon div',
      'Complétez le code suivant : ',
      '<div class="weapon"> \n <div></div>  \n </div> \n <div class="weapon"></div> <div id="weapon"></div>' ,
      4, false);
    lvl4.importantDiv = [2];
    const lvl5 = new Level('.weapon::before', 'Complétez le code suivant : ',
      '<div class="weapon"> \n <div></div>  \n </div> \n <div class="weapon"></div> <div id="weapon"></div>' ,
      4, false);
    lvl5.importantDiv = [3];
    this.game.levels = [ lvl1, lvl2, lvl3, lvl4, lvl5];
    return this.game;
  }
}
