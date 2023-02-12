import { StatusTarefaEnumMapeamento } from './../../models/enums/status-tarefa.enum';
import { Component } from '@angular/core';
import { StatusTarefaEnum } from 'src/app/tarefas/models/enums/status-tarefa.enum';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent {
  public StatusTarefaEnumMapeamento = StatusTarefaEnumMapeamento;

  public status = Object.values(StatusTarefaEnum)

}
