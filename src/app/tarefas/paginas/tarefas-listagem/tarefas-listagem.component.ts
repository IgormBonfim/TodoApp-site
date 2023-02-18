import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaginacaoRequest } from 'src/app/shared/models/requests/paginacao.request';
import { PaginacaoResponse } from 'src/app/shared/models/responses/paginacao.response';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';

@Component({
  selector: 'app-tarefas-listagem',
  templateUrl: './tarefas-listagem.component.html',
  styleUrls: ['./tarefas-listagem.component.scss']
})
export class TarefasListagemComponent implements OnInit {

  public tarefas: PaginacaoResponse<TarefaResponse>;
  public filtro: PaginacaoRequest = new PaginacaoRequest({});

  constructor(
    private spinner: NgxSpinnerService,
    private toastService: ToastService,
    private tarefasService: TarefasService) {}

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas() {
    this.spinner.show()
    this.tarefasService.listarTarefas(this.filtro).subscribe({
      next: (res: PaginacaoResponse<TarefaResponse>) => {
        this.tarefas = res;
        this.spinner.hide();
      },
      error: (error: HttpErrorResponse) => {
        this.spinner.hide();
        this.toastService.erro("Erro ao carregar tarefas", error.message)
      }
    })
  }

  trocarPagina(pagina: number) {
    this.filtro.pagina = pagina;
    this.listarTarefas();
  }
}
