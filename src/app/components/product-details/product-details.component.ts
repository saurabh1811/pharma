import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  data= [
    {
        "image": "../../../assets/images/1.jpeg",
        "name": "Levocetirizine Dihydrochloride",
        "price": 20,
        "id":1
    },
    {
        "image": "../../../assets/images/2.jpeg",
        "name": "azithromycin",
        "price": 20,
        "id":2
    },
    {
        "image": "../../../assets/images/3.jpeg",
        "name": "rabeprazole",
        "price": 20,
        "id":3
    },
    {
        "image": "../../../assets/images/4.jpeg",
        "name": "acebrophylline",
        "price": 20,
        "id":4
    }
]
  selectedItem:any
  items: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private httpClient: HttpClient,
    private router:Router

  ){

  }
  ngOnInit():void{
    let id =this.route.snapshot.paramMap.get('id') as string
    console.log(id)
    this.getProductDetails(id)
  }
  getProductDetails(id:string){
    
      this.selectedItem = this.data[0];
      console.log(this.selectedItem)
  }
  addItemToCart(item: any) {
    // this.cartService.addToCart(item);
    this.router.navigate(['/cart-details'])
  
  }

}
