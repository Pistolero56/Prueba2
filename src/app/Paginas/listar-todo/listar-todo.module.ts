import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarTodoPageRoutingModule } from './listar-todo-routing.module';

import { ListarTodoPage } from './listar-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarTodoPageRoutingModule
  ],
  declarations: [ListarTodoPage]
})
export class ListarTodoPageModule {}
