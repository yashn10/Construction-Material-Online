import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.scss']
})
export class ElectricianComponent implements OnInit {

  data: any = []

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.electrical();
  }

  electrical() {
    this.backend.getelectrical().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }

}
