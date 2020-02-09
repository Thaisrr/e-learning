import {Course} from './course';
import {Question} from './Question';

export class Quiz {
  questions: Question[] = [];

  constructor() {}

  addQuestion(q: Question) {
  this.questions.push(q);
  }
}
