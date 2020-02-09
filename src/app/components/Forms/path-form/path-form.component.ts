import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PathService} from '../../../Services/path.service';
import {Path} from '../../../Classes/path';
import {Course} from '../../../Classes/course';
import {Question} from '../../../Classes/Question';
import {QuestionTypes} from '../../../Classes/questionTypes';
import {Answer} from '../../../Classes/answer';
import {Router} from '@angular/router';
import {QuizLevel} from '../../../Classes/quiz-level';
import {Skills} from '../../../Classes/skills';

@Component({
  selector: 'app-path-form',
  templateUrl: './path-form.component.html',
  styleUrls: ['./path-form.component.css']
})
export class PathFormComponent implements OnInit {
  pathForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    level: new FormControl(),
  });

  courseForm = new FormGroup({
    title: new FormControl(),
    type: new FormControl(),
    chapter: new FormControl(),
    skill: new FormControl(),
    game: new FormControl(),
    addQuiz: new FormControl()
  });

  questionForm = new FormGroup({
    title: new FormControl(),
    type: new FormControl(),
    answer1: new FormControl(),
    answer2: new FormControl(),
    answer3: new FormControl(),
    answer4: new FormControl(),
    isCorrect1: new FormControl(),
    isCorrect2: new FormControl(),
    isCorrect3: new FormControl(),
    isCorrect4: new FormControl(),
  });

  pathCreated = false;
  path: Path;
  course: Course;
  isGame = false;
  addQuiz = false;
  isQcm: boolean;
  question: Question;
  chapterCount = 1;
  questionsCount = 1;

  constructor(
    private pathService: PathService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  postPath() {
    this.path = new Path(
      this.pathForm.get('name').value,
      this.pathForm.get('description').value,
    );
    switch (this.pathForm.get('level').value) {
      case '1':
        this.path.level = QuizLevel.BEGINNER;
        break;
      case '2':
        this.path.level = QuizLevel.MEDIUM;
        break;
      case '3':
        this.path.level = QuizLevel.EXPERT;
        break;
    }
    this.pathService.postPaths(this.path);
     // .subscribe();
    this.pathCreated = true;
  }

  postCourse() {
    this.chapterCount++;
    this.course = new Course();
    this.course.title = this.courseForm.get('title').value;
    this.course.chapter = this.courseForm.get('chapter').value;
    const skill = new Skills();
    skill.name = this.courseForm.get('skill').value;
    skill.level = this.path.level;
    this.course.skill = skill;
    if (this.courseForm.get('type').value === 'game') {
      this.course.game = this.courseForm.get('game').value;
      this.continueAdding();
    } else {
      this.addQuiz = true;
    }
  }

  addQuestion() {
    this.questionsCount++;
    let type;
    switch (this.questionForm.get('type').value) {
      case '0':
        type = QuestionTypes.QCM;
        this.isQcm = true;
        break;
      case '1':
        type = QuestionTypes.String;
        this.isQcm = false;
        break;
    }
    this.question = new Question(
      this.questionForm.get('title').value,
      type
    );
  }

  addAnswer() {
    if (this.question.type === QuestionTypes.String) {
      this.question.answer = this.questionForm.get('answer1').value;
      this.postQuestion();
    } else {
      for (let i = 1; i <= 4; i++) {
        const asw = new Answer(
          this.questionForm.get(`answer${i}`).value,
          this.questionForm.get(`isCorrect${i}`).value
        );
        this.question.answers.push(asw);
      }
      this.postQuestion();
    }
  }

  postQuestion() {
    this.course.quiz.addQuestion(this.question);
    this.question = undefined;
    this.questionForm.reset();
    if (!confirm('Ajouter une nouvelle question ?') ) {
      this.questionsCount = 1;
      this.continueAdding();
    }
  }

  continueAdding() {
    if (confirm('Ajouter un nouveau cours ?')) {
      this.course = undefined;
      this.courseForm.reset();
      this.addQuiz = null;
    } else {
      this.chapterCount = 1;
      this.finishCourse();
    }
  }

  finishCourse() {
    this.path.courses.push(this.course);
    this.pathService.updatePath(this.path);
    console.log(this.path);
    this.router.navigateByUrl('user/home').then();
  }

}
