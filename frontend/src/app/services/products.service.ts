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
}
