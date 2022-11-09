import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTodoPage } from './listar-todo.page';

const routes: Routes = [
  {
    path: '',
    component: ListarTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarTodoPageRoutingModule {}
