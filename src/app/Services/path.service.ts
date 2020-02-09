import { Injectable } from '@angular/core';
import {Path} from '../Classes/path';
import { PATHS} from '../Mock/mock-path';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {PATH_URL} from '../Const/ConstApi';
import {Course} from '../Classes/course';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private pathUrl = PATH_URL;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getPaths(): Observable<Path[]> {
     /*return this.http.get<Path[]>(this.pathUrl)
        .pipe(
          catchError(this.handleError<Path[]>('gePaths', []))
    ); */
     return of(PATHS);
  }

  postPaths(p: Path) {
    this.messageService.add('Parcours enregistré');
    return this.http.post(this.pathUrl, p, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${p.id}`)),
        catchError(this.handleError<any>('add path'))
      );
  }

  getPathById(id: number): Observable<Path> {
    const url = `${this.pathUrl}/${id}`;
    return of(PATHS[id]);
    /*
    return this.http.get<Path>(url)
      .pipe(
        tap(_ => this.log('get path by id')),
        catchError(this.handleError<Path>('get path by id'))
      );
     */
  }

  updatePath(path: Path): Observable<any> {
    return this.http.put(this.pathUrl, path, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated path id = ${path.id}`)),
        catchError(this.handleError<any>('update Path'))
      );
  }

  deletePath(path: Path | number): Observable<Path> {
    const id = typeof path === 'number' ? path : path.id;
    return this.http.delete<Path>(`${this.pathUrl}/${id}`, this.httpOptions)
      .pipe(
        tap( _ => this.log('Delete path id : ' + id)),
        catchError(this.handleError<any>('Deleted Hero'))
      );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PathService: ${message}`);
  }

}


