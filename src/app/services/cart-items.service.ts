import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  private items: any[] = [];
  public cartItemsChanged$ = new Subject<any[]>();
  constructor() { }

  addToCart(item: any) {
    const existingItem = this.items.find(i => i.id === item.id);
  
    if (existingItem) {
      existingItem.quantity++;
      this.cartItemsChanged$.next(this.items);
    } else {
      this.items.push(item);
      this.cartItemsChanged$.next(this.items);
    }
  }

  removeFromCart(item: any) {
    this.items = this.items.filter(i => i !== item);
  }

  getCartItems() {
    return this.items;
  }

  getSubtotal() {
    let subtotal = 0;
    for (const item of this.items) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  }

  getShippingCost() {
    return 5; // Assuming a flat shipping cost of $5
  }

  getTotal() {
    return this.getSubtotal() + this.getShippingCost();
  }
}
