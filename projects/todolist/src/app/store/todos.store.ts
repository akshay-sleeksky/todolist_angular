import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Todo } from "../models/todos.model";
import {Observable} from 'rxjs';

export interface TodoState{
    todos : Todo[];
}


@Injectable()

export class TodoStore extends ComponentStore<TodoState> {
    constructor(){
        super({ todos : []})
    }

    addTodo = this.updater((state, newTodo :string) => ({
        ...state,
        todos : [...state.todos,{content : newTodo, completed : false}]
    }));
    
    updateTodoStatus = this.updater((state, i : number) => {
        state.todos[i].completed = !state.todos[i].completed;
        return{
            ...state,
        }
    });
    deleteTodo = this.updater((state, i : number) => {
        state.todos = state.todos.filter((todo,index) => index != i);
        console.log(state)
        return{
            ...state,
        }
    });

    todos$: Observable<Todo[]> = this.select((state) => state.todos);

}