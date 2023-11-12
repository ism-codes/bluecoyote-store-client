import { Component, OnInit } from '@angular/core';
import { CartItemsService } from '../services/cart-items.service';
import { MatDialog } from '@angular/material/dialog';
import { StoreCheckoutComponent } from '../store-checkout/store-checkout.component';// Adjust the path accordingly

@Component({
  selector: 'app-store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.css'],
  inputs: ['cartItems']
})
export class StoreCartComponent implements OnInit {
  cartItems!: any[];
  subtotal: number = 0;
  shippingCost: number = 5;
  total: number = 0;
  private cartItemsSubscription: any;

  constructor(private CartItemsService: CartItemsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.CartItemsService.cartItemsChanged$.subscribe(cartItems => {
      this.cartItems = cartItems;
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

  openCheckoutModal() {
    // Open the checkout modal
    const dialogRef = this.dialog.open(StoreCheckoutComponent, {
      width: '400px', // Adjust the width as needed
      data: {
        // Pass any data needed by the StoreCheckoutComponent
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
      // Handle any data returned from the checkout modal
    });
  }
}