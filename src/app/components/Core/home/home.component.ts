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

  constructor(
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.getPaths();
  }

  getPaths(): void {
    this.pathService.getPaths()
      .subscribe(p => this.paths = p);
  }
}
