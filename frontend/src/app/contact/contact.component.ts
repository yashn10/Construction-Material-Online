import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  userForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private backend: UserdataService
  ) {
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  addcontact(data: any) {
    this.backend.addcontact(data).subscribe(
      (response) => {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting us. We\'ll get back to you soon.',
          icon: 'success',
          confirmButtonColor: '#f59e0b'
        });
        this.clear();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#f59e0b'
        });
      }
    );
  }

  clear() {
    this.userForm.reset();
  }
}
