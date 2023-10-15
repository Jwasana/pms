import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products : Product[] = []

  constructor(private productService : ProductsService , private router: Router) 
  {

  }

  ngOnInit(): void {

    this.productService.getAllProducts()
    .subscribe({
      next: (p) => {
        this.products = p;
      },
      error: (Response) => {
        console.log(Response);
      }
    })
    
  }

  showAlert(id: string){
    const userConfirmed = window.confirm('Do you want to proceed?');
    
    if (userConfirmed) {
      this.deleteProduct(id)     
    } 
  }

  deleteProduct(id: string){

    this.productService.deleteProduct(id)
    .subscribe({
      next: (response) => {      
        this.ngOnInit();
        window.alert("Product deleted!")
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
}
