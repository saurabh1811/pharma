import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  item:any;
  constructor(private cartService: CartService,private httpClient: HttpClient,private router:Router) {
    this.httpClient.get<any>("../../../assets/item.json").subscribe((data)=>
      this.item = data
    )
    // this.data = data
  }
  addItemToCart(item: any) {
    this.cartService.addToCart(item);
    this.router.navigate(['/cart-details'])
  
  }
}


