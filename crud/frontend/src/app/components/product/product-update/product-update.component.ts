import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../products.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {


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
  // this.readById()
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto alterado com sucesso!!')
      this.router.navigate(['/products'])
      console.log(this.product)
    })
  }

  readById(){
    const id = this.route.snapshot.paramMap.get('id') 
    this.productService.readById(`${id}`).subscribe( (product) => {
      this.product = product;
    });
  }


  cancel(){
    this.router.navigate(['/products'])
  }
}
