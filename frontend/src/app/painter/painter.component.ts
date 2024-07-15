import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.scss']
})
export class PainterComponent implements OnInit {

  paintlist: any = [];
  userloggedin = false;

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.paints();

    const user = localStorage.getItem('User');
    if (user) {
      this.userloggedin = true
    } else {
      this.userloggedin = false
    }
  }


  paints() {
    this.backend.getpaints().subscribe(
      (data) => {
        this.paintlist = data
      }
    )
  }

}
