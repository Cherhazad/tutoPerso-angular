import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getAllProductsWithLimit(limit = 5) : Observable<Product[]> {
    const productsUrl = `${this.apiUrl}products?limit=${limit}`;
    return this.http.get<Product[]>(productsUrl);
  }

  createProduct(product: Product) {
    const productsUrl = `${this.apiUrl}products`;
    return this.http.post<Product>(productsUrl, product);
  }
}
