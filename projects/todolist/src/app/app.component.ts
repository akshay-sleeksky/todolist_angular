import { Component } from '@angular/core';
import { TodoStore } from './store/todos.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [TodoStore]
})
export class AppComponent {

  todos$ = this.todoStore.todos$;

  constructor(private todoStore : TodoStore){}
  
  title = 'todolist';
}

