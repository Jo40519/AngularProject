import { ProductCreateComponent } from './../../components/product/product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.scss']
})
export class ProductsCrudComponent implements OnInit {


  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {  headerService.headerData = {
    title: 'Cadastro de Produtos ',
    icon: 'storefront',
    routeUrl: '/products'  }
  }
  ngOnInit(): void {
  }


  navigateToProductCreate(){
    this.router.navigate(['product/create'])
  }
}
