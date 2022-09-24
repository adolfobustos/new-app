import { Component, OnInit } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: product[] = [
    {
      nombre: 'Jugo Arcor Naranja x 200ml',
      stock: 7,
      precio: 39,
      image: 'assets/images/products/Jugo Arcor Naranja.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Estrellas Frutales x 150gr',
      stock: 14,
      precio: 139,
      image: 'assets/images/products/Estrellas Frutales x 150gr.png',
      clearance: true,
      quantity: 0,
    },
    {
      nombre: 'Mermelada Arcor Light Durazno x 390gr',
      stock: 0,
      precio: 180,
      image: 'assets/images/products/Mermelada Arcor Light Durazno x 390gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Gelatina Godet Frutilla x 30gr',
      stock: 5,
      precio: 240,
      image: 'assets/images/products/Gelatina Godet Frutilla x 30gr.png',
      clearance: true,
      quantity: 0,
    },
    {
      nombre: 'Azúcar Mascabo Arcor x 500gr',
      stock: 0,
      precio: 771,
      image: 'assets/images/products/Azúcar Mascabo Arcor x 500gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Alfajor Bon o Bon x 40gr',
      stock: 10,
      precio: 162,
      image: 'assets/images/products/Alfajor Bon o Bon x 40gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Alfajor Aguila Minitorta Coco x 73 gr',
      stock: 15,
      precio: 246,
      image: 'assets/images/products/Alfajor Aguila Minitorta Coco x 73 gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Caja Bon o Bon Leche x 15gr 18 un',
      stock: 20,
      precio: 452,
      image: 'assets/images/products/Caja Bon o Bon Leche x 15gr 18 un.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Arcor Surtido Chocolates Kiosco en Casa x 246gr 1 Caja',
      stock: 3,
      precio: 551,
      image: 'assets/images/products/Arcor Surtido Chocolates Kiosco en Casa x 246gr 1 Caja.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Alfajor Bon o Bon x 40gr',
      stock: 6,
      precio: 162,
      image: 'assets/images/products/Alfajor Bon o Bon x 40gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Porteñitas x 139gr',
      stock: 9,
      precio: 83,
      image: 'assets/images/products/Porteñitas x 139gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Chocolinas x 170gr',
      stock: 12,
      precio: 99,
      image: 'assets/images/products/Chocolinas x 170gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Saladix Papas sabor Barbacoa x 18 gr',
      stock: 2,
      precio: 55,
      image: 'assets/images/products/Papas Fritas Saladix x 18gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Ser crema y cebolla 40gr',
      stock: 4,
      precio: 97,
      image: 'assets/images/products/Snack Ser Crema y Cebolla 40Gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Rex horneados bolsa x 75gr',
      stock: 8,
      precio: 75,
      image: 'assets/images/products/Snacks horneados Rex Bolsa 75gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Criollitas clásicas x 195 gr',
      stock: 16,
      precio: 121,
      image: 'assets/images/products/Tostadas Clásica Criollitas 195gr.png',
      clearance: false,
      quantity: 0,
    },
    {
      nombre: 'Criollitas dulces x 195 gr',
      stock: 11,
      precio: 125,
      image: 'assets/images/products/Tostadas Dulce Criollitas 195gr.png',
      clearance: false,
      quantity: 0,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(product: product): void {
    if (product.quantity < product.stock)
      product.quantity++;
  }

  downQuantity(product: product): void {
    if (product.quantity > 0)
      product.quantity--;
  }

}