import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CartService {
  private jsonFileUrl = '../../../assets/item.json'; // Path to the JSON file
  items: any;
  constructor(
    private httpClient: HttpClient,
  ){

  }
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0); // Observable for cart count

  cartCount$ = this.cartCount.asObservable(); // Expose as observable

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
    this.cart.push(item);
    this.cartCount.next(this.cart.length);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }
  getCartCount() {
    return this.cartCount.asObservable();
  }
  
  getItemById(id: number): Observable<any> {
    return this.httpClient.get<any[]>(this.jsonFileUrl).pipe(map(data => data.find(item => item.id === id))  // Find the data by id
    );
    

  }
}