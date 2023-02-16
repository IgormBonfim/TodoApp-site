import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdicionarTarefaComponent } from 'src/app/tarefas/components/adicionar-tarefa/adicionar-tarefa.component';
import { FiltrosComponent } from 'src/app/tarefas/components/filtros/filtros.component';
import { ListagemComponent } from 'src/app/tarefas/components/listagem/listagem.component';
import { TarefaComponent } from 'src/app/tarefas/components/tarefa/tarefa.component';
import { TarefasDetalhesComponent } from 'src/app/tarefas/components/tarefas-detalhes/tarefas-detalhes.component';
import { TarefasEditarComponent } from 'src/app/tarefas/paginas/tarefas-editar/tarefas-editar.component';
import { TarefasListagemComponent } from 'src/app/tarefas/paginas/tarefas-listagem/tarefas-listagem.component';
import { TarefasRoutingModule } from 'src/app/tarefas/tarefas-routing.module';


@NgModule({
  declarations: [
    TarefasListagemComponent,
    TarefaComponent,
    FiltrosComponent,
    ListagemComponent,
    AdicionarTarefaComponent,
    TarefasDetalhesComponent,
    TarefasEditarComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FontAwesomeModule,
    PaginationModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class TarefasModule { }
