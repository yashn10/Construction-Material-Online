import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from "../service/userdata.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  detail: any = {};

  // Dummy product lookup for frontend-only products
  private dummyProducts: { [key: string]: any } = {
    'paint001': { title: 'Asian Paints Royale Luxury Emulsion', description: 'Premium interior emulsion paint with silk-like smooth finish.', price: 2850, image: 'assets/asian paints.jpg' },
    'paint002': { title: 'Dulux Velvet Touch Diamond Glow', description: 'Diamond Glow finish with stain-guard technology.', price: 3200, image: 'assets/dulux paints.jpg' },
    'paint003': { title: 'Berger Silk Luxury Emulsion', description: 'Ultra-premium silk finish paint with anti-bacterial properties.', price: 2600, image: 'assets/burger paints.jpg' },
    'paint004': { title: 'Asian Paints Apex Ultima Exterior', description: 'Weather-proof exterior paint with 10-year warranty.', price: 4200, image: 'assets/fixit paints.jpg' },
    'paint005': { title: 'Indigo Paints Metallic Finish', description: 'Metallic sheen paint for accent walls.', price: 3800, image: 'assets/painter2 (1).jpeg' },
    'paint006': { title: 'Nerolac Beauty Smooth Finish', description: 'High-quality smooth finish interior paint.', price: 1950, image: 'assets/painter3 (1).jpeg' },
    'elec001': { title: 'Havells 10A Modular Switch Board', description: 'Premium modular switch board with flame-retardant material.', price: 850, image: 'assets/ELE (1).jpeg' },
    'elec002': { title: 'Fybros Heavy Duty Extension Board', description: '6-outlet power strip with surge protection.', price: 1200, image: 'assets/Fybros.jpg' },
    'elec003': { title: 'INDRICO LED Panel Light 18W', description: 'Ultra-slim ceiling LED panel light.', price: 650, image: 'assets/INDRICO.jpg' },
    'elec004': { title: 'Polycab FR PVC Insulated Wire 90m', description: 'Fire-retardant PVC insulated copper wire.', price: 2100, image: 'assets/ELE1 (1).jpeg' },
    'elec005': { title: 'Philips Decorative Chandelier Lamp', description: 'Modern crystal chandelier with E27 base.', price: 4500, image: 'assets/Lamp.jpg' },
    'elec006': { title: 'Anchor Roma Modular Switch Set', description: 'Complete Roma modular switch set.', price: 520, image: 'assets/ELE2 (1).jpeg' },
    'furn001': { title: 'Royal Oak King Size Bed Set', description: 'Solid sheesham wood king size bed with hydraulic storage.', price: 32000, image: 'assets/bed.jpg' },
    'furn002': { title: 'Premium L-Shaped Sofa Set', description: 'Luxury L-shaped sofa with premium fabric upholstery.', price: 45000, image: 'assets/sofa.jpg' },
    'furn003': { title: 'Modern Dining Table 6-Seater', description: 'Contemporary dining table set with 6 chairs.', price: 28000, image: 'assets/dining.jpg' },
    'furn004': { title: 'Executive Wardrobe 3-Door', description: 'Spacious 3-door wardrobe with mirror.', price: 18500, image: 'assets/almari.jpg' },
    'furn005': { title: 'Ergonomic Office Chair', description: 'High-back ergonomic office chair with lumbar support.', price: 8500, image: 'assets/chair.jpg' },
    'furn006': { title: 'Modular Kitchen Cabinet Set', description: 'Complete modular kitchen cabinet set.', price: 55000, image: 'assets/kitchen.jpg' },
    'tile001': { title: 'Italian Marble Floor Tiles 600x600mm', description: 'Premium Italian marble finish floor tiles.', price: 120, image: 'assets/tiles1 (1).jpeg' },
    'tile002': { title: 'Ceramic Wall Tiles 300x450mm', description: 'Designer ceramic wall tiles for kitchen and bathroom.', price: 85, image: 'assets/tiles2 (1).jpg' },
    'tile003': { title: 'Wooden Finish Vitrified Tiles', description: 'Natural wood-look vitrified tiles.', price: 150, image: 'assets/titles3 (1).jpeg' },
    'tile004': { title: 'Mosaic Designer Tiles Set', description: 'Handcrafted mosaic tile set for accent walls.', price: 280, image: 'assets/tiles.jpg' },
    'tile005': { title: 'Outdoor Paving Stone Tiles', description: 'Heavy-duty outdoor paving tiles.', price: 95, image: 'assets/th (1).jpg' },
    'tile006': { title: 'Porcelain Double Charge Tiles 800x800mm', description: 'Double charge porcelain tiles with mirror finish.', price: 200, image: 'assets/th (2).jpg' },
  };

  constructor(
    private route: ActivatedRoute,
    private backend: UserdataService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // Check if it's a dummy product first
      if (this.dummyProducts[id]) {
        this.detail = this.dummyProducts[id];
        return;
      }

      // Otherwise fetch from backend (try all categories)
      this.backend.getpaintbyid(id).subscribe(
        (data: any) => { if (data && data.title) this.detail = data; },
        () => { }
      );
      this.backend.getelectricalbyid(id).subscribe(
        (data: any) => { if (data && data.title) this.detail = data; },
        () => { }
      );
      this.backend.getfurniturebyid(id).subscribe(
        (data: any) => { if (data && data.title) this.detail = data; },
        () => { }
      );
      this.backend.getinteriorbyid(id).subscribe(
        (data: any) => { if (data && data.title) this.detail = data; },
        () => { }
      );
    }
  }
}
