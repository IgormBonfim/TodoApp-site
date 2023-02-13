import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { AlertsService } from 'src/app/shared/services/alerts.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';

@Component({
  selector: 'app-tarefas-detalhes',
  templateUrl: './tarefas-detalhes.component.html',
  styleUrls: ['./tarefas-detalhes.component.scss']
})
export class TarefasDetalhesComponent implements OnInit{

  public idTarefa!: string;
  public tarefa!: TarefaResponse;
  public subject!: Subject<boolean>;


  constructor(
    private alertsService: AlertsService,
    private tarefasService: TarefasService,
    private toastService: ToastService,
    public bsModelRef: BsModalRef) {}

  ngOnInit(): void {
    // this.bsModelRef.setClass("modal-lg");
    this.recuperarTarefa();
    this.subject = new Subject();
  }

  recuperarTarefa() {
    this.tarefasService.recuperarTarefa(this.idTarefa).subscribe({
      next: (res: TarefaResponse) => {
        this.tarefa = res;
      },
      error: (error: HttpErrorResponse) => {
        this.toastService.erro("Erro ao carregar detalhes da tarefa.", "Ocorreu um erro ao carregar os detalhes da tarefa, tente novamente mais tarde.")
        console.error(error);
      }
    })
  }

  botaoEditar() {

  }

  botaoDeletar() {
    this.alertsService.alertPersonalizado({
      title: 'Deseja mesmo excluir essa tarefa?',
      text: `Tem certeza que deseja excluir essa tarefa? Essa ação não é reversível.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn btn-primary mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false,

    }).then((result) => {
      if (result.isConfirmed) {
        this.deletarTarefa();
        this.bsModelRef.hide();
      }
    })
  }

  deletarTarefa() {
    this.tarefasService.excluirTarefa(this.tarefa.id).subscribe({
      next: () => {
        this.toastService.sucesso("Sucesso", "Tarefa excluída com sucesso.");
        this.subject.next(true);
      },
      error: () => {
        this.toastService.erro("Erro", "Erro ao excluir tarefa, tente novamente mais tarde.")
      }
    })
  }

  closeModal() {
    this.bsModelRef.hide()
  }
}
