import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';

@Component({
  selector: 'app-tarefas-listagem',
  templateUrl: './tarefas-listagem.component.html',
  styleUrls: ['./tarefas-listagem.component.scss']
})
export class TarefasListagemComponent implements OnInit {

  public filtro = true;
  public tarefas: TarefaResponse[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private toastService: ToastService,
    private tarefasService: TarefasService) {}

  ngOnInit(): void {
    this.listarTarefas()
  }

  listarTarefas() {
    this.spinner.show()
    this.tarefasService.listarTarefas().subscribe({
      next: (res: TarefaResponse[]) => {
        this.tarefas = res;
        this.spinner.hide();
      },
      error: (error: HttpErrorResponse) => {
        this.spinner.hide();
        this.toastService.erro("Erro ao carregar tarefas", error.message)
      }
    })
  }
}
