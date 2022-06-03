import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  highlights: Product[] = [];
  base_url = "https://source.unsplash.com/random/";

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.highlights = this.service.listHighlights();
    console.log(this.highlights)
  }

}
