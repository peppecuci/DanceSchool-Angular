import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Iaddress} from "./iaddress";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    street: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),
    cap: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
  })

  address: Iaddress | undefined = {
    street: "",
    number: "",
    cap: "",
    city: "",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
  }
}
