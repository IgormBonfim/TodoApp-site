import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {

  @Input() public tarefa!: TarefaResponse
  @Output() public onDetalhes = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {

  }

  botaoDetalhes() {
    this.onDetalhes.emit(this.tarefa.id);
  }
}
