import { Component, OnInit,inject } from '@angular/core';
import { MatSnackBarModule,MatSnackBar,MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  
  snackBarRef = inject(MatSnackBarRef);
}
