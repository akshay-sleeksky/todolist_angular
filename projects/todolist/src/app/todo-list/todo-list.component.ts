import { Component, Input, OnInit } from '@angular/core';
import { TodoStore } from '../store/todos.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoStore : TodoStore) { }

  todos$ = this.todoStore.todos$;

  public updateTodoStatus = (val : number) =>{
    this.todoStore.updateTodoStatus(val);
  }
  public deleteTodo = (val : number) =>{
    this.todoStore.deleteTodo(val);
  }

  ngOnInit(): void {
  }

}
