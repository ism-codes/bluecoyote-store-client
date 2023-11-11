import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store-dashboard',
  templateUrl: './store-dashboard.component.html',
  styleUrls: ['./store-dashboard.component.css']
})
export class StoreDashboardComponent {
  products = [
    {
      "name": "Whey Protein Powder",
      "price": 29.99,
      "description": "Build muscle mass and recover faster with our premium whey protein powder. It's the perfect post-workout supplement to help you reach your fitness goals.",
      "image": "assets/protein.jpg"
    },
    {
      "name": "Creatine Monohydrate",
      "price": 19.99,
      "description": "Boost your strength and power with our creatine monohydrate powder. It's a clinically proven supplement that can help you take your workouts to the next level.",
      "image": "assets/creatine.jpg"
    },
    {
      "name": "Pre-Workout Supplement",
      "price": 24.99,
      "description": "Get ready to crush your workouts with our pre-workout supplement. It's packed with powerful ingredients to give you the energy, focus, and endurance you need to push yourself to the limit.",
      "image": "assets/preworkout.jpg"
    }
  ];
}
