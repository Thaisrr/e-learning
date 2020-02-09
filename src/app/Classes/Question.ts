import {Answer} from './answer';
import {QuestionTypes} from './questionTypes';

export class Question {
  title: string;
  answer: string;
  answers: Answer[] = [];
  type: QuestionTypes;


  constructor(title: string, type: QuestionTypes) {
    this.title = title;
    this.type = type;
  }
}
