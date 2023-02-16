import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasEditarResolver } from 'src/app/tarefas/guards/tarefas-editar.resolver';
import { TarefasListagemComponent } from 'src/app/tarefas/paginas/tarefas-listagem/tarefas-listagem.component';

import { TarefasEditarComponent } from './paginas/tarefas-editar/tarefas-editar.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: TarefasListagemComponent
  },
  {
    path: ":id/editar",
    component: TarefasEditarComponent,
    resolve: {
      tarefa: TarefasEditarResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
