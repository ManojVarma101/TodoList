import { Component , Output , EventEmitter} from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:   string;
  desc: string;

  
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();


  constructor(){}

  onSubmit(){
    const todo ={
      sno: 8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    console.log('Description Value:', this.desc);
    this.todoAdd.emit(todo);

  }

}
