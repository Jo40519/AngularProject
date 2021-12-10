import { ProductCreateComponent } from './../../components/product/product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.scss']
})
export class ProductsCrudComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  navigateToProductCreate(){
    this.router.navigate(['product/create'])
  }
}
