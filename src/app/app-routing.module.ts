import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CorrevaComponent } from './components/correva/correva.component';
import { AboutComponent } from './components/about/about.component';
import { PharmaFranchiseCompanyIndiaComponent } from './components/pharma-franchise-company-india/pharma-franchise-company-india.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PtrPtsCalculatorComponent } from './components/ptr-pts-calculator/ptr-pts-calculator.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CarrierComponent } from './components/carrier/carrier.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'pharma-franchise-company-india', component: PharmaFranchiseCompanyIndiaComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ptr-pts-calculator', component: PtrPtsCalculatorComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'carrier', component: CarrierComponent },
  { path: '', component: HomeComponent },
  // Add other routes here
];

const routerOptions: ExtraOptions = {
  anchorScrolling:'enabled',
  scrollPositionRestoration: 'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
