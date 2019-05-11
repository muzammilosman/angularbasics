import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient ) { }
  getContent() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      catchError(this.handlerror)
    );
  }

  handlerror(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }


  getCallerTask() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    .pipe(
      catchError(this.handlerror)
    );
  }

  getDetailContent(post) {
    return post;
  }

  addTaskDetails(userId, id, title) {
    this.http.post('https://jsonplaceholder.typicode.com/todos', {
      "userId": userId, "id": id, "title": title, "body": "abc"
      }).subscribe((data) => {
        alert("User ID created"+data);
      });
  }
}
