import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { BasketComponent } from './basket/basket.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileDashboardComponent,
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
