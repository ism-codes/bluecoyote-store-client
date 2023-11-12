import { Component, OnInit, inject,ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartItemsService } from '../services/cart-items.service';
import { StoreCartComponent } from '../store-cart/store-cart.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { EventService } from '../services/event.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styleUrls: ['./store-dashboard.component.css']
})
export class StoreDashboardComponent implements OnInit{
  @ViewChild('drawer') drawer: any; 
  private breakpointObserver = inject(BreakpointObserver);
  
  cartItems: any[] = [];
  constructor(private cartService: CartItemsService,private eventService: EventService, private _snackBar: MatSnackBar) { }
  ngOnInit() {
    // Subscribe to the orderPlaced$ event
    this.eventService.orderPlaced$.subscribe(() => {
      // Implement logic to close the drawer
      this.cartItemQuantity = 0;
      this.closeDrawer();
      this.openSnackBar()
      // Example: this.closeDrawer();
    });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(ConfirmationComponent, {
      duration: 10 * 1000,
    });
  }
  addToCart(product: any) {
      this.cartService.addToCart(product);
      this.cartItemQuantity += 1
    }
  
  cartItemQuantity: number = 0;
  closeDrawer() {
    if (this.drawer) {
      this.drawer.close();
    }}
  products = [
    {
      "id": 1,
      "name": "Whey Protein Powder",
      "price": 29.99,
      "quantity": 1,
      "description": "Build muscle mass and recover faster with our premium whey protein powder. It's the perfect post-workout supplement to help you reach your fitness goals.",
      "image": "assets/protein.jpg",
    },
    {
      "id": 2,
      "name": "Creatine Monohydrate",
      "price": 19.99,
      "quantity": 1,
      "description": "Boost your strength and power with our creatine monohydrate powder. It's a clinically proven supplement that can help you take your workouts to the next level.",
      "image": "assets/creatine.jpg"
    },
    {
      "id": 3,
      "name": "Pre-Wookute Supplement",
      "price": 24.99,
      "quantity": 1,
      "description": "Get ready to crush your workouts with our pre-workout supplement. It's packed with powerful ingredients to give you the energy, focus, and endurance you need to push yourself to the limit.",
      "image": "assets/preworkout.jpg"
    }
  ];
  services = [
    {
      "id": 4,
      "name": "Personalized Workout Plan",
      "price": 49.99,
      "description": "Get a customized workout plan tailored to your individual needs and goals. Our experienced trainers will work with you to create a plan that will help you achieve your fitness aspirations.",
      "image": "assets/fitness.png",
      "quantity": 1
    },
    {
      "id": 5,
      "name": "Nutrition Coaching",
      "price": 59.99,
      "description": "Work with our qualified nutritionists to develop a personalized eating plan that will support your fitness goals. Receive expert guidance on how to make healthy food choices, track your calories, and create meal plans.",
      "image": "assets/nutrition.png",
      "quantity": 1
    },
    {
      "id": 6,
      "name": "Virtual Online Coaching",
      "price": 99.99,
      "description": "Receive personalized training and guidance from the comfort of your own home. Connect with our certified trainers via video chat for one-on-one sessions that are tailored to your specific needs and goals.",
      "image": "assets/coaching.png",
      "quantity": 1
    }
  ];
}
