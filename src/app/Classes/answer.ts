export class Answer {
  id: number;
  text: string;
  isCorrect: string;


  constructor(text: string, isCorrect: string) {
    this.text = text;
    this.isCorrect = isCorrect;
  }
}
