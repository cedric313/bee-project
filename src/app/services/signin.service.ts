import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
   readonly urlApi = 'http://localhost:8082/user/search';
   readonly urlApiToGet = 'http://localhost:8082/user/1';

  constructor(private http: HttpClient) { }

  postUserAuthentication (user): Observable<any> {
  let headers = new HttpHeaders({'Content-Type':'application/json'
    });
    return this.http.post(this.urlApi, user, {headers});
  }

  getUserBYId() : Observable<any>{
    return this.http.get(this.urlApiToGet);
  }




}
