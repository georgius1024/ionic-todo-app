import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoItem } from '../../models/to-do-item'
import { ToDoListProvider } from '../../providers/to-do-list/to-do-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, list: ToDoListProvider) {
    const todo = new TodoItem(1, '100');
    console.log(todo)
    // const list = new ToDoListProvider();
    list.add('item 1');
    list.add('item 2');
    list.add('item 3');
    let items = list.getItems();
    console.log(items)
    /*
    expect(items.length).toBe(3);
    expect(items[0].id).toBe(1);
    expect(items[1].id).toBe(2);
    */
  }

}
