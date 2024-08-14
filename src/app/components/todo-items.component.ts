import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  template: `
    <label
      [for]="todoItem.id"
      [ngStyle]="{
        'text-decoration': todoItem.iscompleted ? 'line-through' : '',
      }"
    >
    
        <input type="checkbox" name="todo" [id]="todoItem.id"
        [checked]="todoItem.iscompleted" (change)="todoItem.iscompleted =
        !todoItem.iscompleted" />
        {{ todoItem.task | lowercase }}
      <!-- le pipe permet d'excuter une methode sur la variable a afficher  -->
      
      <app-button (ActionButton)="delete(todoItem.id)" ButtonName="X" />
    </label>

  `,
  styles: [``],
})
export class TodoItemsComponent {
  @Input() todoItem!: Todo;

  @Output() ActionButton = new EventEmitter<number>();

  delete(id: number): void {
    this.ActionButton.emit(id);
  }
}


interface Todo {
  task: string;
  iscompleted: boolean;
  id: number;
}