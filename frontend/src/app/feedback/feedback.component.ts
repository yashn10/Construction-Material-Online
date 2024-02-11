import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../service/userdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbackForm!: FormGroup


  constructor(private formbuilder: FormBuilder, private http: HttpClient, private backend: UserdataService) {
    this.feedbackForm = this.formbuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      message: ['']
    })
  }


  addfeedback(data: any) {
    this.backend.addfeedback(data).subscribe(
      (response) => {
        Swal.fire(
          'Successfull!',
          'Your feedback has been saved!',
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
    this.feedbackForm.reset();
  }

}
