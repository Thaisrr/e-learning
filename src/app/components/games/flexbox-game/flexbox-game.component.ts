import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {Game} from '../../../Classes/game';
import {GameService} from '../../../Services/game.service';

@Component({
  selector: 'app-flexbox-game',
  templateUrl: './flexbox-game.component.html',
  styleUrls: ['./flexbox-game.component.css']
})
export class FlexboxGameComponent implements OnInit, AfterViewInit {
  game: Game;
  @ViewChild('one', {static: false}) one: ElementRef;
  @ViewChild('two', {static: false}) two: ElementRef;
  @ViewChild('three', {static: false}) three: ElementRef;
  @ViewChild('four', {static: false}) four: ElementRef;
  @ViewChild('hero', {static: false}) hero: ElementRef;
  @ViewChild('map', {static: false}) map: ElementRef;
  @ViewChild('pointer_container', {static: false}) pointerContainer: ElementRef;
  @ViewChild('onePt', {static: false}) onePt: ElementRef;
  @ViewChild('twoPt', {static: false}) twoPt: ElementRef;
  @ViewChild('threePt', {static: false}) threePt: ElementRef;
  @ViewChild('heroPt', {static: false}) heroPt: ElementRef;
  form = new FormGroup({
    answer: new FormControl()
  });
  level = 0;
  private gameService = new GameService();
  points = 0;

  constructor() {
  }

  ngOnInit() {
    this.game = this.gameService.generateFlexGame();
    console.log(this.game.levels.length);

  }

  ngAfterViewInit(): void {
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
    this.map.nativeElement.style = asw;
    setTimeout( _ => {
      const isWin = this.gameService.check(asw, this.level, this.points);
      this.level += 1;
      this.points += (isWin) ? 1 : 0;
      this.form.reset();
      this.changeMap();
    }, 2000);

  }

  changeMap() {
    console.log(`Level : ${this.level}`);
    console.log(`Points : ${this.points}`);
    /*
    On récupère le Level associé au jeu.
    On display le nombre de div correspondant
    On display ou non le héro
     */
    switch (this.game.levels[this.level].numberOfDiv) {
      case 1:
        this.one.nativeElement.style.display = 'block';
        this.two.nativeElement.style.display = 'none';
        this.three.nativeElement.style.display = 'none';
        break;
      case 2:
        this.one.nativeElement.style.display = 'block';
        this.two.nativeElement.style.display = 'block';
        this.three.nativeElement.style.display = 'none';
        break;
      case 3:
        this.one.nativeElement.style.display = 'block';
        this.two.nativeElement.style.display = 'block';
        this.three.nativeElement.style.display = 'block';
        break;
        case 4:
        this.one.nativeElement.style.display = 'block';
        this.two.nativeElement.style.display = 'block';
        this.three.nativeElement.style.display = 'block';
        this.four.nativeElement.style.display = 'block';
        break;
    }
    this.onePt.nativeElement.style.display = this.one.nativeElement.style.display;
    this.twoPt.nativeElement.style.display = this.two.nativeElement.style.display;
    this.threePt.nativeElement.style.display = this.three.nativeElement.style.display;
    this.heroPt.nativeElement.style.display = this.hero.nativeElement.style.display;
    this.pointerContainer.nativeElement.style = this.game.levels[this.level].answer;
    console.log(this.game.levels[this.level].answer);
    // this.hero.nativeElement.style.display = (this.game.levels[this.level].isHeroDisplayed) ? 'none' : 'block';
  }

}
