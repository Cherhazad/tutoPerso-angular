import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/api/products/product.service";
import {Product} from "../../services/api/models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {

    const product: Product = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'any category',
      image: 'https://via.placeholder.jpg/150'
    }

    this.service.getAllProductsWithLimit().subscribe({
      next: (result) => {
        this.products = result;
      },
      error: (error) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(`Server returned status code ${error.status}, error message: ${error.message}`);
        }
      }
    });
  }

}
