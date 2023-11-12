import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CartItemsService } from '../services/cart-items.service';
import { EventService } from '../services/event.service'; // Import EventService
const headerType: Object = {
  // Your headers...
};

@Component({
  selector: 'app-store-checkout',
  templateUrl: './store-checkout.component.html',
  styleUrls: ['./store-checkout.component.css']
})
export class StoreCheckoutComponent {

  Orderfirstname = '';
  Orderlastname = '';
  Orderproductordered = '';
  Orderstreet = '';
  Ordercity = '';
  Orderstate = '';
  Orderzip = '';
  Ordercost = '12.99';

  constructor(private dialog: MatDialog, private http: HttpClient, private cartItemsService: CartItemsService,private eventService: EventService) {}

  openCheckoutDialog(): void {
    const dialogRef = this.dialog.open(StoreCheckoutComponent, {
      width: '400px', // Adjust the width as needed
      data: {
        Orderfirstname: this.Orderfirstname,
        Orderlastname: this.Orderlastname,
        Orderstreet: this.Orderstreet,
        Ordercity: this.Ordercity,
        Orderstate: this.Orderstate,
        Orderzip: this.Orderzip
      },
      // Add other dialog configuration options as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle any data returned from the dialog
    });
  }

  async insertOne() {
    // Get cart items and total from CartItemsService
    const cartItems = this.cartItemsService.getCartItems();
    const total = this.cartItemsService.getTotal();

    // Prepare the order details
    const orderDetails = {
      "firstname": this.Orderfirstname,
      "lastname": this.Orderlastname,
      "productordered": cartItems, // Assuming you have a productName property in your items
      "street": this.Orderstreet,
      "city": this.Ordercity,
      "state": this.Orderstate,
      "zip": this.Orderzip,
      "cost": total
    };

    // Send the order to the backend
    const url = "https://us-west-2.aws.data.mongodb-api.com/app/data-byvgz/endpoint/data/v1/action/insertOne";
    const bodyType = {
      "dataSource": "PortfolioDB",
      "database": "bluecoyote",
      "collection": "orders",
      "document": orderDetails
    };

    const getOneObject = await this.http.post(url, bodyType, headerType).subscribe({
      next: (MongoObject) => {
        // Optionally, reset the cart or perform other actions after successful submission
        this.cartItemsService.clearCart();
        this.eventService.triggerOrderPlaced();
        this.dialog.closeAll();
      },
      error: (e) => console.error(e),
      complete: () => console.info('Order Complete')
    });
  }
}
