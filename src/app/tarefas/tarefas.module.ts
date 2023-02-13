import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { FiltrosComponent } from './components/filtros/filtros.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { TarefasListagemComponent } from './paginas/tarefas-listagem/tarefas-listagem.component';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { AdicionarTarefaComponent } from './components/adicionar-tarefa/adicionar-tarefa.component';


@NgModule({
  declarations: [
    TarefasListagemComponent,
    TarefaComponent,
    FiltrosComponent,
    ListagemComponent,
    AdicionarTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FontAwesomeModule,
    PaginationModule,
    ReactiveFormsModule
  ]
})
export class TarefasModule { }
