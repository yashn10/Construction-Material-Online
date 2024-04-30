import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  detail: any = []

  constructor(private route: ActivatedRoute, private backend: UserdataService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')

    id && this.backend.getpaintbyid(id).subscribe(
      (data) => {
        this.detail = data;
      }
    )

    id && this.backend.getinteriorbyid(id).subscribe(
      (data) => {
        this.detail = data;
      }
    )

    id && this.backend.getfurniturebyid(id).subscribe(
      (data) => {
        this.detail = data;
      }
    )

    id && this.backend.getelectricalbyid(id).subscribe(
      (data) => {
        this.detail = data;
      }
    )
  }

}
