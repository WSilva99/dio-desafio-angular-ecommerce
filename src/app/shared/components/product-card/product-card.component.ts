import { Component, OnInit, Input } from '@angular/core';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  base_url = "https://source.unsplash.com/random/"

  @Input() product: Product = {
    name: "Produto",
    description: "Descrição",
    price: 0,
    image: "?not"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
