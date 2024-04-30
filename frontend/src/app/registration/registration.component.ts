import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  userForm!: FormGroup


  constructor(private formbuilder: FormBuilder, private router: Router, private backend: UserdataService) {
    this.userForm = this.formbuilder.group({
      fullname: [''],
      email: [''],
      phone: [''],
      gender: [''],
      password: [''],
      cpassword: ['']
    })
  }


  addUser(data: any) {
    this.backend.adduser(data).subscribe(
      (userdata) => {
        this.router.navigate(['login']);
        Swal.fire(
          'Successfull!',
          'Your registration has been successfull!',
          'success'
        )
        console.log(userdata);
      },
      (error) => {
        Swal.fire(
          'Oops...',
          'Something went wrong!',
          'error'
        )
        console.log(error);
      }
    )
  }

}
