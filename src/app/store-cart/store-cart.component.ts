import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.css'],
  inputs: ['cartItems']
})
export class StoreCartComponent {
  cartItems!: any[];
  subtotal: number = 0;
  shippingCost: number = 5;
  total: number = 0;
  private cartItemsSubscription: any;
  constructor(private CartItemsService: CartItemsService) { }
  
  ngOnInit(): void {
    this.cartItemsSubscription = this.CartItemsService.cartItemsChanged$.subscribe(cartItems => {
      this.cartItems = cartItems;
      console.log(this.cartItems)
      this.calculateTotals();
    });
  }

  removeItem(item: any) {
    this.CartItemsService.removeFromCart(item);
    this.cartItems = this.CartItemsService.getCartItems();
    this.calculateTotals();
  }

  calculateTotals() {
    this.subtotal = 0;
    for (const item of this.cartItems) {
      this.subtotal += item.price * item.quantity;
    }
    this.total = this.subtotal + this.shippingCost;
  }

  checkout() {
    // Implement checkout functionality
  }
}
