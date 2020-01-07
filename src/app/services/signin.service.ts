import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
   readonly urlApi = 'http://localhost:8082/user/search';
   readonly urlApiToCreateAccount = 'http://localhost:8082/user';

  constructor(private http: HttpClient) { }

  userConnection (user): Observable<any> {
    let username = 'user';
    let password = 'password';
    let header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };
    return this.http.post(this.urlApi, user, header);
  }

  createUserAccount (user): Observable<any> {
    let username = 'user';
    let password = 'password';
    let header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };
    return this.http.post(this.urlApiToCreateAccount,user, header)
  }





}
