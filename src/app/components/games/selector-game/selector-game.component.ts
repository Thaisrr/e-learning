import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Game} from '../../../Classes/game';
import {GameService} from '../../../Services/game.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-selector-game',
  templateUrl: './selector-game.component.html',
  styleUrls: ['./selector-game.component.css']
})
export class SelectorGameComponent implements OnInit {
  game: Game;
  @ViewChild('one', {static: false}) one: ElementRef;
  @ViewChild('two', {static: false}) two: ElementRef;
  @ViewChild('three', {static: false}) three: ElementRef;
  @ViewChild('four', {static: false}) four: ElementRef;
  @ViewChild('map', {static: false}) map: ElementRef;
  level = 0;
  private gameService = new GameService();
  points = 0;
  form = new FormGroup({
  answer: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.game = this.gameService.generateSelectorGame();
    console.log(this.game.levels.length);
    this.changeMap();
  }

  /* On récupére la réponse
On modifie le display de la map pour que ça corresponde à la réponse
On vérifie la réponse après 2sc
On réactualise le formulaire
On change la map en fonction du nouveau niveau
 */
  validateForm() {
    const asw = this.form.get('answer').value;
    const container = document.querySelector('.game-container');
    const el = container.querySelectorAll(asw);
    el.forEach(e => e.style.border = 'solid medium black');

    setTimeout( _ => {
      const isWin = this.gameService.check(asw, this.level, this.points);
      this.level += 1;
      this.points += (isWin) ? 1 : 0;
      this.form.reset();
      console.log(this.game.levels[this.level].answer);
      this.changeMap();
    }, 2000);

  }

  /*
Afficher les bonnes images, en fonction de la réponse attendue. Entourée les div choisies par le selecteur
-> Dans QuizLevel, générer les divs a afficher ?
   */
  changeMap() {
    const container = document.querySelector('.game-container');
    const divNumb = this.game.levels[this.level].numberOfDiv;
    // Images pour les div  :
    const otherImg = 'url("../../../../assets/Images/skeleton.webp")';
    const weaponImg = 'url("../../../../assets/Images/dragon-noob.png")';
    const parentImg = 'url("../../../../assets/Images/hole.png")';

    // Suppression des child de container pour en recrééer de nouvelles :
    container.innerHTML = '';

    // On crée les div qui s'afficheront en fonction de la réponse du niveau / type de selecteur
    for (let i = 1; i <= divNumb; i++) {
      const el = document.createElement('div');
      el.classList.add('move');
      // Récupérer les div importante, changer leur aspect.
      if (this.game.levels[this.level].importantDiv.includes(i)) {
          el.classList.add('toSelect');
          el.style.backgroundImage = weaponImg;
        } else  {
          el.style.backgroundImage = otherImg;
        }
      if ( i === 2) {
        const parent = document.createElement('section');
        parent.classList.add('move');
        container.appendChild(parent);
        parent.appendChild(el);
        parent.style.backgroundImage = parentImg;
      } else {
        container.appendChild(el);
      }
    }

  }

}
