import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-todo',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-todo',
    loadChildren: () => import('./Paginas/listar-todo/listar-todo.module').then( m => m.ListarTodoPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./Paginas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./Paginas/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./Paginas/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./Paginas/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./Paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
