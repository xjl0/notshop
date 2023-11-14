import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { BasketComponent } from './components/basket/basket.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    UserinfoComponent,
    OrdersComponent,
    FavoriteProductsComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
