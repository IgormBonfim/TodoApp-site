import { Component, Input, OnInit } from '@angular/core';

import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {

  @Input() public tarefa!: TarefaResponse

  constructor() {}

  ngOnInit(): void {

  }

}
