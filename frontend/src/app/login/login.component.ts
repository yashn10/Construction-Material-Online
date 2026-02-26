import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private backend: UserdataService
  ) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(data: any) {
    this.loading = true;
    this.backend.loginuser(data).subscribe(
      (response) => {
        localStorage.setItem("User", data.email);
        this.router.navigate(['/dashboard']);
        Swal.fire({
          title: 'Welcome!',
          text: 'You have logged in successfully.',
          icon: 'success',
          confirmButtonColor: '#f59e0b'
        });
        this.loading = false;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
          confirmButtonColor: '#f59e0b'
        });
        console.log(error);
        this.loading = false;
      }
    );
  }
}
