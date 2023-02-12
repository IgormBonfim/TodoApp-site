import { Component, OnInit } from '@angular/core';
import { TarefasService } from 'src/app/shared/services/tarefas.service';

import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  public tarefas!: TarefaResponse[];

  constructor(private tarefasService: TarefasService) {}

  ngOnInit() {
    this.listar();
  }

  // public tarefa = new TarefaResponse({
  //   id: "Blablalba",
  //   nome: "Nome tarefa",
  //   detalhes: "Detalhes da tarefa",
  //   status: "Andamento"
  // })

  public listar() {
    this.tarefasService.teste().subscribe({
      next: (res : TarefaResponse[]) => {
        this.tarefas = res;
      }
    })
  }
}
