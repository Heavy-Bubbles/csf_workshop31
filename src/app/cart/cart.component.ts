import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartItems: CartItem[] = [];

  deleteItem(item: CartItem){
    if (item.quantity > 1){
      item.quantity--;
    } else {
      let itemIndex = this.cartItems.indexOf(item);
      this.cartItems.splice(itemIndex, 1);
    }
  }

  

  
}
