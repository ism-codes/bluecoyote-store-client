// event.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private orderPlacedSubject = new Subject<void>();

  orderPlaced$ = this.orderPlacedSubject.asObservable();

  triggerOrderPlaced() {
    this.orderPlacedSubject.next();
  }
}
