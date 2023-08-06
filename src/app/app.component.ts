import { Component } from '@angular/core';
import { Item } from './item';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_workshop31';

  receivedItems: CartItem[] = [];

  receiveSelectedItems(event: Item){

      let obj = this.receivedItems.find(o => o.item.name === event.name);
      
      let foundIndex = this.receivedItems.indexOf(obj as CartItem);

      if(foundIndex >= 0){
        this.receivedItems[foundIndex].quantity++;
      } else {
        this.receivedItems.push({ item: event, quantity: 1 });
      }
    
    

  }
}
