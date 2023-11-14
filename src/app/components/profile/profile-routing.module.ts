import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  {path:'profile', component: ProfileDashboardComponent,
    children: [
      {path:'userinfo', component:UserinfoComponent},
      {path:'orders', component:OrdersComponent},
      {path:'favorite', component:FavoriteProductsComponent},
      {path:'basket', component:BasketComponent},
    
    ],


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
