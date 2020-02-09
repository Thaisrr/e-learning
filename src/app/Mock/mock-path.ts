import {Path} from '../Classes/path';

export let PATHS: Path[] = [];
PATHS = makePaths(PATHS);

function makePaths(ps: Path[]): Path[] {
  for (let i = 0; i < 10; i++) {
    let p = new Path('MyPath' + i, 'Description d\'un super parcours !');
    ps.push(p);
  }
  return ps;
}
