import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetLivestockService {
  readonly urlApiToGetLivestock = 'http://localhost:8082/';
  public liveStock: any;

  constructor(private http: HttpClient) { }

  getLivestock(idUser): Observable<any> {
    let username = 'user';
    let password = 'password';
    let header = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(username + ':' + password)
      })
    };
    return this.http.get(this.urlApiToGetLivestock + idUser + '/livestock', header)
  }
}
