import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import Product from '../models/Product';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrls: ['./home-store.component.scss']
})
export class HomeStoreComponent implements OnInit {
  products: Product[] = [];
  modeGrid = true;
  order = "fa-solid fa-sort";
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.listProducts();
    this.changeOrder();
  }

  changeToList() {
    this.modeGrid = false;
    console.log(this.modeGrid);
  }
  
  changeToGrid() {
    this.modeGrid = true;
  }

  changeOrder() {
    switch(this.order) {
      case "fa-solid fa-arrow-down-a-z":
        this.orderByName("ASC");
        this.order = "fa-solid fa-arrow-down-z-a";
        break;
      case "fa-solid fa-arrow-down-z-a":
        this.orderByName("DSC");
        this.order = "fa-solid fa-arrow-down-1-9";
        break;
      case "fa-solid fa-arrow-down-1-9":
        this.orderByPrice("ASC");
        this.order = "fa-solid fa-arrow-down-9-1";
        break;
      case "fa-solid fa-arrow-down-9-1":
        this.orderByPrice("DSC");
        this.order = "fa-solid fa-sort";
        break;
      default:
        this.products = this.service.listProducts();
        this.order = "fa-solid fa-arrow-down-a-z";
    }
  }

  orderByPrice(order: string): void {
    let ord;
    if(order === "ASC") {
      ord = (a: Product, b: Product) => {
        if(a.price < b.price)
          return -1;
        if(a.price > b.price)
          return 1
        return 0;
      }  
    } else if(order === "DSC") {
      ord = (a: Product, b: Product) => {
        if(a.price < b.price)
          return 1;
        if(a.price > b.price)
          return -1
        return 0;
      }
    } 
    this.products.sort(ord);
  }

  orderByName(order: string): void {
    this.products.sort((a, b) => a.name.localeCompare(b.name));
    
    if(order === "DSC"){
      this.products.reverse();
    }
  }

}
