import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todos.model';
import { TodoStore } from '../store/todos.store';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoStore : TodoStore) {}


  public newTask = '';

  public inputChange = (newVal : string) =>{
    this.newTask = newVal;
  }
  public  addTodo = () =>{
    if( this.newTask === '' )
      return
    else{
      this.todoStore.addTodo(this.newTask)
    }
    this.newTask = '';
    
  }
  ngOnInit(): void {   
  }

}
