import {Course} from './course';
import {Quiz} from './quiz';
import {QuizLevel} from './quiz-level';

export class Path { // parcours
  id: number;
  name: string;
  description: string;
  courses: Course[] = [];
  level: QuizLevel;
  mainQuiz: Quiz;
  isVisible;


  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
