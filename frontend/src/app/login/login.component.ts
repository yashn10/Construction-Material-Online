import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;


  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }


  login() { }

}
