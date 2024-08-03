import {Component} from '@angular/core';
import {Product} from "../../services/api/models/product";
import {ProductService} from "../../services/api/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  product: Product = {};

  constructor(private service: ProductService,
              private router: Router) {
  }

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (result) => {
        this.router.navigate(['products']);
      }
    });
  }
}
