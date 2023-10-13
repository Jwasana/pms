import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl:string = "https://localhost:7230";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {

    return  this.http.get<Product[]>(this.baseApiUrl + '/api/products') 

  }

  addProduct(newProduct: Product) : Observable<Product>{
    //newProduct.id = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    newProduct.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseApiUrl + '/api/products', newProduct);
  }
}
