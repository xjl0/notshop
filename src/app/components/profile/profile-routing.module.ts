import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {path:'', component: ProfileComponent,
    children: [
      {path:'userinfo', component:UserinfoComponent},
      {path:'orders', component:OrdersComponent},
      {path:'favorite', component:FavoriteProductsComponent},
      {path:'basket', component:BasketComponent},
    ],
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
