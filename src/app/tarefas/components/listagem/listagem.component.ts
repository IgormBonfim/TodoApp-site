import { PaginacaoRequest } from './../../../shared/models/requests/paginacao.request';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { PaginacaoResponse } from 'src/app/shared/models/responses/paginacao.response';
import { AdicionarTarefaComponent } from 'src/app/tarefas/components/adicionar-tarefa/adicionar-tarefa.component';
import { TarefasDetalhesComponent } from 'src/app/tarefas/components/tarefas-detalhes/tarefas-detalhes.component';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  @Input() public tarefas: PaginacaoResponse<TarefaResponse>;
  @Output() public onModalHide = new EventEmitter();
  @Output() public onTrocarPagina = new EventEmitter<number>();

  constructor(
    private router: Router,
    private modalService: BsModalService) {}

  ngOnInit() {

  }

  private emitirEventoModal() {
    this.onModalHide.emit();
  }

  private gerenciarModal(bsModalRef: BsModalRef) {
    let resultado = bsModalRef.content.subject;
    resultado.asObservable().subscribe({
      next: () => {
        this.emitirEventoModal();
      }
    })

    let edicao = bsModalRef.content.editar;
    edicao.asObservable().subscribe({
      next: (id: string) => {
        this.irParaEdicao(id);
      }
    })
  }

  abrirModalCadastro() {
    console.log(this.tarefas);

    let bsModalRef: BsModalRef = this.modalService.show(AdicionarTarefaComponent);

    this.gerenciarModal(bsModalRef);
  }

  exibirDetalhesTarefa(id: string) {

    let options: ModalOptions<TarefasDetalhesComponent> = {
      initialState: {
        idTarefa: id
      }
    }

    let bsModalRef: BsModalRef = this.modalService.show(TarefasDetalhesComponent, options);
    this.gerenciarModal(bsModalRef);
  }

  irParaEdicao(id: string) {
    this.router.navigate(['/tarefas/' + id + '/editar'])
  }

  trocarPagina(event: PageChangedEvent) {
    this.onTrocarPagina.emit(event.page);
  }

}
