import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  username: string = "";
  password: string = "";

  constructor(
    private _auth: AuthService,
    private _session: SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._auth.callLogin(this.username, this.password).subscribe(data => {
      console.log(data);
      this._session.login(data[0]);
    })
  }
}
