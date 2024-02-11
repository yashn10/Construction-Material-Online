import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../service/userdata.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  userForm!: FormGroup


  constructor(private formbuilder: FormBuilder, private http: HttpClient, private backend: UserdataService) {
    this.userForm = this.formbuilder.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  addcontact(data: any) {
    this.backend.addcontact(data).subscribe(
      (response) => {
        Swal.fire(
          'Successfull!',
          'Your contact details has been saved!',
          'success'
        )
        this.clear();
        console.log(response);
      }, (error) => {
        console.error("error", error);
      }
    )
  }


  clear() {
    this.userForm.reset();
  }


}
