import { Product } from './../products.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

product: Product = {
  id: 0,
  name: '',
  price: 0
}

  constructor(private productService: ProductService,
    private router: Router,
    ) { }


  ngOnInit(): void {
  
  }

  configurarFormulario(){
  
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação realizada com sucesso!!')
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
