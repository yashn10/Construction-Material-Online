import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  userForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private backend: UserdataService
  ) {
    this.userForm = this.formbuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required]]
    });
  }

  addUser(data: any) {
    if (data.password !== data.cpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match. Please try again.',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    this.backend.adduser(data).subscribe(
      (userdata) => {
        this.router.navigate(['login']);
        Swal.fire({
          title: 'Account Created!',
          text: 'Your registration was successful. Please login.',
          icon: 'success',
          confirmButtonColor: '#f59e0b'
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.error?.error || 'Something went wrong. Please try again.',
          confirmButtonColor: '#f59e0b'
        });
      }
    );
  }
}
