import { Component, OnInit } from '@angular/core';
import {PathService} from '../../../Services/path.service';
import {Path} from '../../../Classes/path';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.css']
})
export class PathsComponent implements OnInit {
  paths: Path[];
  constructor(
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.getPaths();
  }

  getPaths(): void {
    this.pathService.getPaths().subscribe( p => this.paths = p );
  }

}
