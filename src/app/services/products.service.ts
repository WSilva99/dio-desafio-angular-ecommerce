import { Injectable } from '@angular/core';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      name: "Airpod",
      description: "Fone de ouvido muito caro.",
      price: 2345.98,
      image: "?airpod"

    },
    {
      name: "Macbook",
      description: "Notebook absurdamente caro.",
      price: 9989.98,
      image: "?macbook"
    },
    {
      name: "iPhone 13",
      description: "Telefone caro de mais.",
      price: 9999.98,
      image: "?iphone"
    },    
    {
      name: "Redmi 8",
      description: "Telefone bom mais barato que iPhone.",
      price: 1599.98,
      image: "?redmi"
    }
  ];

  highlights: Product[] = [
    {
      name: "Steam Deck",
      description: "Sonho de consumo.",
      price: 5999.00,
      image: "?steam"
    },
    {
      name: "HP Elitedesk",
      description: "PC bem legal.",
      price: 3999.00,
      image: "?hp"
    },
    {
      name: "Steam Deck",
      description: "Sonho de consumo.",
      price: 5999.00,
      image: "?deck"
    },
    
  ]

  constructor() { }

  listProducts(): Product[] {
    return this.products;
  }

  listHighlights(): Product[] {
    return this.highlights;
  }

}
