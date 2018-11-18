import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import { Comments } from './comments.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: Http) { }

  getComments(): Observable<Comments[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(
      map(response => response.json()),
      catchError((e:Response)=> throwError(e))
    );
  }
}
