import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PathService} from '../../../Services/path.service';
import {Path} from '../../../Classes/path';
import {Course} from '../../../Classes/course';
import {QuestionTypes} from '../../../Classes/questionTypes';
import {FormControl} from '@angular/forms';
import {Question} from '../../../Classes/Question';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.css']
})
export class PathDetailsComponent implements OnInit {
  id: number;
  path: Path;
  currentCourse: Course;
  seeIntro: boolean;
  seeCourse: boolean;
  seeQuiz: boolean;
  qcm = QuestionTypes.QCM;
  questionIndex = 0;
  currentQuestion: Question;
  result = 0;

  answersForm = new FormControl({
    0: new FormControl(),
    1: new FormControl(),
    2: new FormControl(),
    3: new FormControl(),
    answer: new FormControl()
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private pathService: PathService
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getPathById();
    this.seeIntro = true;
  }

  getPathById() {
    this.pathService.getPathById(this.id).subscribe(
      p => this.path = p
    );
  }

  displayCourse(id: number) {
    this.path.courses.forEach(c => {
      if (c.id === id) {
        this.currentCourse = c;
      }
    });
    this.seeIntro = false;
    this.seeCourse = true;
  }

  validateCourse() {
    this.seeCourse = false;
    this.seeQuiz = true;
    // If game -> redirect to game
    // If quiz -> quiz
  }

  loadQuiz() {
      this.answersForm.reset();
      this.currentQuestion = this.currentCourse.quiz.questions[this.questionIndex];
  }

  checkAnswer() {
    if (this.currentQuestion.type === this.qcm ) {
      console.log('meeeh');
    } else {
      const an = this.answersForm.get('answer').value;
      const correct = this.currentQuestion.answer.toLowerCase().split(' ');
      this.result += (an.toLowerCase().split(' ') === correct ) ? 1 : 0;
    }
    if (this.questionIndex <= this.currentCourse.quiz.questions.length) {
      this.loadQuiz();
    }
  }

  validateQuiz() {

  }

  /*
  gete q by id.
  if q.type = qcm =>
    foreach answer as a
      if a.isValidated === for.get(a).value

   */

}
