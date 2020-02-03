export class Level {
  answer: string;
  question: string;
  code: string;
  numberOfDiv: number;
  isHeroDisplayed: boolean;
  pointerStyle: string;
  moveStyle: string;
  importantDiv: number[];


  constructor(answer: string, question: string, code: string, numberOfDiv: number, isHeroDisplayed: boolean) {
    this.answer = answer;
    this.question = question;
    this.code = code;
    this.numberOfDiv = numberOfDiv;
    this.isHeroDisplayed = isHeroDisplayed;
  }


}
