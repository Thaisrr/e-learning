import {Path} from '../Classes/path';
import {Course} from '../Classes/course';
import {Question} from '../Classes/Question';
import {QuestionTypes} from '../Classes/questionTypes';

export let PATHS: Path[] = [];
PATHS = makePaths(PATHS);

function makePaths(ps: Path[]): Path[] {
  for (let i = 0; i < 10; i++) {
    const p = new Path('MyPath' + i, 'Description d\'un super parcours !');
    p.id = i;
    for (let j = 1; j < 6; j++) {
      const c = new Course();
      c.id = +(i.toString() + j.toString());
      c.title = 'Chapter ' + j;
      c.chapter = 'Contenu du cours. Un super cours top super mégacool !';
      c.skill.name = 'Skill' + j;
      for ( let k = 1; k < 5; k ++ ) {
        const q = new Question(
          'Quelle est la réponse ?',
          QuestionTypes.String
        );
        q.id =  +(i.toString() + j.toString() + k.toString());
        q.answer = 'La bonne réponse !';
        c.quiz.addQuestion(q);
      }
      p.courses.push(c);
    }


    ps.push(p);
  }
  return ps;
}
