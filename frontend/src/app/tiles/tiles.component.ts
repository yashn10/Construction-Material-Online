import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  data: any[] = [];
  userloggedin = false;

  private dummyTiles = [
    {
      _id: 'tile001',
      title: 'Italian Marble Floor Tiles 600x600mm',
      description: 'Premium Italian marble finish floor tiles with high gloss. Scratch-resistant and easy to maintain.',
      price: 120,
      image: 'assets/tiles1 (1).jpeg'
    },
    {
      _id: 'tile002',
      title: 'Ceramic Wall Tiles 300x450mm',
      description: 'Designer ceramic wall tiles for kitchen and bathroom. Water-resistant with vibrant patterns.',
      price: 85,
      image: 'assets/tiles2 (1).jpg'
    },
    {
      _id: 'tile003',
      title: 'Wooden Finish Vitrified Tiles',
      description: 'Natural wood-look vitrified tiles. Anti-skid surface, perfect for living rooms and bedrooms.',
      price: 150,
      image: 'assets/titles3 (1).jpeg'
    },
    {
      _id: 'tile004',
      title: 'Mosaic Designer Tiles Set',
      description: 'Handcrafted mosaic tile set for accent walls and backsplash. Mixed material with metallic accents.',
      price: 280,
      image: 'assets/tiles.jpg'
    },
    {
      _id: 'tile005',
      title: 'Outdoor Paving Stone Tiles',
      description: 'Heavy-duty outdoor paving tiles with natural stone finish. Weather-resistant and non-slip surface.',
      price: 95,
      image: 'assets/th (1).jpg'
    },
    {
      _id: 'tile006',
      title: 'Porcelain Double Charge Tiles 800x800mm',
      description: 'Double charge porcelain tiles with mirror-like finish. High strength and abrasion-resistant for commercial use.',
      price: 200,
      image: 'assets/th (2).jpg'
    }
  ];

  constructor(private backend: UserdataService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('User');
    this.userloggedin = !!user;

    this.backend.getinterior().subscribe(
      (data: any) => {
        this.data = data && data.length > 0 ? data : this.dummyTiles;
      },
      () => {
        this.data = this.dummyTiles;
      }
    );
  }
}
