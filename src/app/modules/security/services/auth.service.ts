import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  callLogin(username: string, password: string): Observable<any>{

    const params = new HttpParams({fromObject: {username, password}});

    return this._http.get("http://localhost:3000/users", {params});

  }



}
