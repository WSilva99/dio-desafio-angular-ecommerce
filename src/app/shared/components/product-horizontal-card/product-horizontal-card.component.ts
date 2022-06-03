import { Component, OnInit, Input } from '@angular/core';
import Product from 'src/app/models/Product';

@Component({
  selector: 'app-product-horizontal-card',
  templateUrl: './product-horizontal-card.component.html',
  styleUrls: ['./product-horizontal-card.component.scss']
})
export class ProductHorizontalCardComponent implements OnInit {
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
