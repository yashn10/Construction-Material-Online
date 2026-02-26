import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserdataService } from "../service/userdata.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbackForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private backend: UserdataService
  ) {
    this.feedbackForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  addfeedback(data: any) {
    this.backend.addfeedback(data).subscribe(
      (response) => {
        Swal.fire({
          title: 'Thank You!',
          text: 'Your feedback has been submitted successfully.',
          icon: 'success',
          confirmButtonColor: '#f59e0b'
        });
        this.clear();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Something went wrong. Please try again.',
          confirmButtonColor: '#f59e0b'
        });
      }
    );
  }

  clear() {
    this.feedbackForm.reset();
  }
}
