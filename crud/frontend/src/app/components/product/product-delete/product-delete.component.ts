import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../products.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {


  product: Product = {
    id:0,
    name: '',
    price: 0
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = '1'
    this.productService.readById(`${id}`).subscribe( product => {
      this.product = product;
    })
  }


  deleteProduct(){
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso');
      this.router.navigate(['/products'])
    })
  }


  cancel(){
    this.router.navigate(['/products'])
  }
}
