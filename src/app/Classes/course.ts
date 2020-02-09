import {Quiz} from './quiz';
import {QuizLevel} from './quiz-level';
import {Skills} from './skills';

export class Course {
  title: string;
  chapter: string; // wysiwyg pour écrire le cours
  quiz = new Quiz();
  game: string;
  id: number;
  skill: Skills;

}
