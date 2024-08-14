import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo.component';
import { TodoItemsComponent } from './components/todo-items.component';
import { ButtonComponent } from './components/shared/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoItemsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * ce fichier ses a enregister toute les composant et module externe
 * n'est pas utiliser en cas d'utilisation de composant autonome ou standlon 
 * il est remplacer par app.config.ts dans les version ulterieur
 */