import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'about', component:PageAboutComponent},
  {path: 'login', component:LoginComponent},
  {path: '**', component:NotfoundComponent},
  {
    path: 'profile', 
    pathMatch: 'full',
    loadChildren: ()=>
     import('./components/profile/profile.module').then(
      (m)=> m.ProfileModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
