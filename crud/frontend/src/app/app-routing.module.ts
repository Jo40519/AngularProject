import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
    {
    path:"products",
    component: ProductsCrudComponent
    },
    {
      path:"product/create",
      component: ProductCreateComponent
    }
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
