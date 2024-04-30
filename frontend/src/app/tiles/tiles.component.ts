import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  data: any = []

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    this.interior();
  }

  interior() {
    this.backend.getinterior().subscribe(
      (response) => {
        this.data = response;
      }
    )
  }

}
