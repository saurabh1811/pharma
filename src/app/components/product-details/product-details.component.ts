import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



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
    private router:Router,
    private toastr: ToastrService

  ){

  }
  ngOnInit():void{
    let id =this.route.snapshot.paramMap.get('id') as string
    console.log(id)
    this.getProductDetails(parseInt(id))
    window.scrollTo(0, 0);
  }
  getProductDetails(id:number){
    
      this.selectedItem = this.data[0];
      let data =this.cartService.getItemById(id).subscribe(data =>{
        this.selectedItem = data
      });
      console.log(data)
      
  }
  addItemToCart(item: any) {
    console.log(this.toastr)
    this.toastr.success('Item Added to Cart!');
    this.cartService.addToCart(item);
    // this.router.navigate(['/cart-details'])
  
  }

}
