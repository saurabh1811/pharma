import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'pharma-franchise-company-india', component: PharmaFranchiseCompanyIndiaComponent },
  { path: 'product', component: ProductComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ptr-pts-calculator', component: PtrPtsCalculatorComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', component: HomeComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
