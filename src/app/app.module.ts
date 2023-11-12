import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { StoreCartComponent } from './store-cart/store-cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreCheckoutComponent } from './store-checkout/store-checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [			
    AppComponent,
    StoreNavComponent,
    StoreDashboardComponent,
      StoreCartComponent,
      StoreCheckoutComponent,
      ConfirmationComponent
   ],
  imports: [
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
