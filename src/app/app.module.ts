import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CorrevaComponent } from './components/correva/correva.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PharmaFranchiseCompanyIndiaComponent } from './components/pharma-franchise-company-india/pharma-franchise-company-india.component';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PtrPtsCalculatorComponent } from './components/ptr-pts-calculator/ptr-pts-calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { CarrierComponent } from './components/carrier/carrier.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CorrevaComponent,
    FooterComponent,
    AboutComponent,
    PharmaFranchiseCompanyIndiaComponent,
    ProductComponent,
    BlogComponent,
    ContactComponent,
    PtrPtsCalculatorComponent,
    CartDetailsComponent,
    ProductDetailsComponent,
    CarrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MdbCollapseModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
