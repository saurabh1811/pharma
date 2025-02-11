import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CartService {
  private jsonFileUrl = '../../../assets/item.json'; // Path to the JSON file
  items: any;
  constructor(
    private httpClient: HttpClient,
  ){

  }
  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(item: any) {
    this.cart.push(item);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  clearCart() {
    this.cart = [];
  }
  
  getItemById(id: number): Observable<any> {
    return this.httpClient.get<any[]>(this.jsonFileUrl).pipe(map(data => data.find(item => item.id === id))  // Find the data by id
    );
  }
}