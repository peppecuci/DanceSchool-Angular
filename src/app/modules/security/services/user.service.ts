import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Iaddress} from "../components/register/iaddress";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  registerOnDb(id: number, username: string, password: string, address: Iaddress): Observable<any> {


    return this._http.post("http://localhost:4200/register", {id, username, password, address})
  }

}
