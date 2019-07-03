import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'store', loadChildren: './pages/store/store.module#StorePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },  { path: 'selectproducts', loadChildren: './pages/selectproducts/selectproducts.module#SelectproductsPageModule' },
  { path: 'selectaddress', loadChildren: './pages/selectaddress/selectaddress.module#SelectaddressPageModule' },
  { path: 'orderdetailed', loadChildren: './pages/orderdetailed/orderdetailed.module#OrderdetailedPageModule' },
  { path: 'orderfinished', loadChildren: './pages/orderfinished/orderfinished.module#OrderfinishedPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
