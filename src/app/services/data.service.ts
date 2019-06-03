import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user = new BehaviorSubject<string>('Hey there');
  cast = this.user.asObservable();

  constructor(public http: HttpClient ) {}

  updateUser(data) {
      console.log('this is data: ' + data);
      this.user.next(data);
  }

  getContent() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      catchError(this.handlerror),
      retry(3)
    );
  }

  handlerror(error: HttpErrorResponse) {
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
    const headers = new HttpHeaders({
      "userId": userId, 
      "id": id, 
      "title": title, 
      "body": "abc"
    });

    this.http.post('https://jsonplaceholder.typicode.com/todos', {headers: headers}).subscribe((data) => {
        alert("User ID created"+data);
      });
  }

}
