import {Input, Output} from "@angular/core";
import { Component, EventEmitter } from '@angular/core';
import { Todo } from '../../Todos';

@Component({  
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo:Todo;//i am getting input as todo in the type of Todo class which we imported from Todos.ts
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor(){

  }
  onClick(todo:Todo){//todo object should be used here 
    this.todoDelete.emit(todo);
    console.log("Onclick is triggered");
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    console.log(todo);
  }
}
