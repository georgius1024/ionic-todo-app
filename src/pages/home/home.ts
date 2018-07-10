import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoItem } from '../../models/to-do-item'
import { ToDoListProvider } from '../../providers/to-do-list/to-do-list';
import { TodoItem } from '../../models/to-do-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: TodoItem[]
  constructor(public navCtrl: NavController, todosProvider: ToDoListProvider) {
    this.todos = todosProvider.getItems()
    //const todo = new TodoItem(1, '100');
    //console.log(todo)
    // const list = new ToDoListProvider();
    /*
    todosProvider.add('item 1');
    todosProvider.add('item 2');
    todosProvider.add('item 3');
    let items = todosProvider.getItems();
    console.log(items)
    */
    /*
    expect(items.length).toBe(3);
    expect(items[0].id).toBe(1);
    expect(items[1].id).toBe(2);
    */
  }

  itemSelected(item): void {
    console.log(item)
  }

}
