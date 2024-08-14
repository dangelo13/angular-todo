import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'tuto';
  ArrayTodo = [
    {
      task: 'faire les course',
      iscompleted: false,
      id: 1,
    },
    {
      task: 'apprendre react',
      iscompleted: true,
      id: 2,
    },
    {
      task: 'faire les course',
      iscompleted: false,
      id: 3,
    },
  ];
  Visible: boolean = true;
  isdisabled: boolean = false;

  isVisible(): string {
    return this.Visible ? 'masquer' : 'afficher';
  }
  addTodo(event: { addtodo: string }): void {
    this.isdisabled = true;
    const newTodo = {
      task: event.addtodo,
      iscompleted: false,
      id: this.ArrayTodo.length + 1,
    };
    setTimeout(() => {
      this.ArrayTodo = [...this.ArrayTodo, newTodo];
      this.isdisabled = false;
    }, 1000);
  }
  handleClick(): void {
    this.Visible = !this.Visible;

  }

  sortTodo() {
    const allTodo = [...this.ArrayTodo];
    allTodo.sort((a, b) => (a.iscompleted > b.iscompleted ? 1 : -1));
     return !this.Visible ? allTodo.filter((todo) => !todo.iscompleted) : allTodo;
    
  }

  deleteTodo(id: number): void {
    this.ArrayTodo = this.ArrayTodo.filter((todo) => todo.id !== id);
  }
}
