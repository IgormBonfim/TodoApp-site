import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TarefasListagemComponent } from './paginas/tarefas-listagem/tarefas-listagem.component';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ListagemComponent } from './components/listagem/listagem.component';


@NgModule({
  declarations: [
    TarefasListagemComponent,
    TarefaComponent,
    FiltrosComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FontAwesomeModule
  ]
})
export class TarefasModule { }
