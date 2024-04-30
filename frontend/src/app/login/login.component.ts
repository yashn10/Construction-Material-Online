import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;


  constructor(private formbuilder: FormBuilder, private router: Router, private backend: UserdataService, private http: HttpClient) {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }


  login(data: any) {
    this.backend.loginuser(data).subscribe(
      (response) => {
        this.router.navigate(['/']);
        Swal.fire(
          'Successfull!',
          'User login successfully!',
          'success'
        )
        localStorage.setItem("User", data.email);
        console.log("User login successfully", response);
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: 'Incorrect credentials'
        })
        console.log(error);
      }
    )
  }

}
