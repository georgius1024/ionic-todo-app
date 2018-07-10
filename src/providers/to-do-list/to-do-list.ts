import { Injectable } from '@angular/core';



/*
  Generated class for the ToDoListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToDoListProvider {
  _todos
  constructor() {
    console.log('Hello ToDoListProvider Provider');
  }

}
