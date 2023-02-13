import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AdicionarTarefaComponent } from 'src/app/tarefas/components/adicionar-tarefa/adicionar-tarefa.component';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  @Input() public tarefas: TarefaResponse[] = [];
  @Output() public onAdicionarHide = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {

  }

  abrirModalCadastro() {
    let bsModalRef: BsModalRef = this.modalService.show(AdicionarTarefaComponent);

    let resultado = bsModalRef.content.tarefaAdicionada;
    resultado.asObservable().subscribe({
      next: () => {
        this.onAdicionarHide.emit()
      }
    })
  }

}
