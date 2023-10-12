import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : Product[] = [
    {
      id: 1,
      name: "name1",
      type: "type 1",
      color: "red",
      price: 120
    },
    {
      id: 2,
      name: "name2",
      type: "type 2",
      color: "red",
      price: 123
    }
  ]

}
