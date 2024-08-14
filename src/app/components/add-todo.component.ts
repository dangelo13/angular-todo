import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  template: `
    <form class="wrapper" #formTodo="ngForm" (ngSubmit)="onSubmit(formTodo)">
      <input
        type="text"
        name="addtodo"
        id="addtodo"
        placeholder="ajouter une tache"
        ngModel
      />
      <app-button
        ButtonName="ajouter"
        [CustomDisabled]="isDisabled"
        CustomType="submit"
      />
    </form>
  `,
  styles: [
    `
      .wrapper {
        display: flex;
        align-items: start;
        gap: 8px;
        width: 100%;
      }
    `,
  ],
})
export class AddTodoComponent {
  todo = 'salut';
  @Input() isDisabled!: boolean;

  // AddClass(): string {
  //   if (this.isDisabled) return 'disabled';
  //   return '';
  // }

  @Output() ActionButton = new EventEmitter<{ addtodo: string }>();

  onSubmit(formTodo: NgForm) {
    this.ActionButton.emit(formTodo.value);
    formTodo.reset();
  }
}
