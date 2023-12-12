import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminModule } from './moduls/admin/admin.module';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'about', component:PageAboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'profile', 
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: ()=>
     import('./components/profile/profile.module').then(
      (m)=> m.ProfileModule
      ),
  },
  {path: 'admin',
  loadChildren:()=>import('./moduls/admin/admin.module').then((m)=>m.AdminModule)},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
