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
    PtrPtsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
