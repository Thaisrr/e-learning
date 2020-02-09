import { Component, OnInit } from '@angular/core';
import {Path} from '../../../Classes/path';
import {PathService} from '../../../Services/path.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paths: Path[];
  firstsPath: Path[] = [];

  constructor(
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.getPaths();
    this.getFirstPaths();
  }

  // TO get only 4 paths
  getFirstPaths() {
    let i = 0;
    this.paths.forEach(p => {
      if ( i < 4 ) {
        this.firstsPath.push(p);
        i++;
      }
      }
    );
  }

  getPaths(): void {
 /*   this.pathService.getPaths()
      .subscribe(p => {
        if ( p.length > 0) {
          for (let i = 0; i < 4; i++) {
            if (p[i].isVisible) {
              this.paths.push(p[i]);
            }
          }
        }
      }); */
  this.pathService.getPaths().subscribe( p => this.paths = p);
  }
}
