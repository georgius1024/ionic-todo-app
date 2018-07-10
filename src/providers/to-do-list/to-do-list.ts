import { Injectable } from '@angular/core';

import { TodoItem } from '../../models/to-do-item'

/*
  Generated class for the ToDoListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoListProvider {
  _todos: TodoItem[];
  constructor() {
    this.loadFromStorage();
  }

  public getItems(): TodoItem[] {
    return this._todos.filter(e => !Boolean(e.archivedAt));
  }

  public getArchive(): TodoItem[] {
    return this._todos.filter(e => Boolean(e.archivedAt));
  }

  public add (title: string): TodoItem {
    let id = 1;
    this._todos.forEach((item) => {
      if (item.id >= id) {
        id = item.id + 1;
      }
    });
    this.saveToStorage()
    return new TodoItem(id, title)
  }

  public find(id: number): TodoItem {
    return this._todos.find((item) => {
      return (item.id === id);
    })
  }

  public complete (id: number): TodoItem {
    let item = this.find(id);
    if (item) {
      item.complete();
    }
    this.saveToStorage()
    return item
  }

  public archive (id: number): TodoItem {
    let item = this.find(id);
    if (item) {
      item.archive();
    }
    return item;
  }

  private loadFromStorage () {
    console.log('retrieving todos from storage...');
    this._todos = [];
    const todos = localStorage.getItem('todos');
    if (todos) {
      try {
        this._todos = JSON.parse(todos)
      } catch (error) {
        console.log(error)
      }
    }
  }

  private saveToStorage () {
    console.log('saving todos to storage...');
    const todos = JSON.stringify(this._todos);
    localStorage.setItem('todos', todos);
  }


}
