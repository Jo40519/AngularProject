import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor() { }


  atributoLegal = 'qualquer'
  ngOnInit(): void {
  }


  fazerAlgo(){
    console.log('Fazendo algo')
  }
}