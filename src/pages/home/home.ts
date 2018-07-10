import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoItem } from '../../models/to-do-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    const todo = new TodoItem(1, '100');
    console.log(todo)

  }

}
