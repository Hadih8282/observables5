import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  public changeBodyPost(val: string) {

    let body = JSON.stringify({
      body: val
    }) ;

    let headers = new HttpHeaders({ 'Content-Type' : 'application/json; charset=UTF-8'});
    let options = {headers: headers};

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/1`, body , options)
      .pipe(
        delay(2000)
      )

  }



}
