import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  items: Item[] = [
    { name: "Apple", image:"./assets/images/apple.png"},
    { name: "Pear", image:"./assets/images/pear.png"},
    { name: "Orange", image:"./assets/images/orange.png"},
    { name: "Watermelon", image:"./assets/images/watermelon.png"},
  ];

  @Output() onItemSelected : EventEmitter<Item> = new EventEmitter();

  itemSelected (item: Item){
    console.log(item);
    this.onItemSelected.emit(item);
  }



}
