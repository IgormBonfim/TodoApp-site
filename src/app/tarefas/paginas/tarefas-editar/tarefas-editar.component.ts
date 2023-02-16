import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { TarefaAtualizarRequest } from 'src/app/tarefas/models/requests/tarefa-atualizar.request';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';

@Component({
  selector: 'app-tarefas-editar',
  templateUrl: './tarefas-editar.component.html',
  styleUrls: ['./tarefas-editar.component.scss']
})
export class TarefasEditarComponent implements OnInit {

  private id!: string;
  public tarefaForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private tarefasService: TarefasService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario() {
    const tarefa = this.route.snapshot.data['tarefa'];

    this.id = tarefa.id;

    let status!: number;

    switch(tarefa.status) {

      case "Aguardando":
        status = 0;
        break;

      case "Andamento":
        status = 1;
        break;

      case "Concluida":
        status = 2;
        break;

      case "Cancelada":
        status = 3;
        break;
    }

    this.tarefaForm = this.formBuilder.group({
      nome: [tarefa.nome, [Validators.required, Validators.minLength(3)]],
      detalhes: [tarefa.detalhes, [Validators.required, Validators.minLength(5)]],
      status: [status, [Validators.required]],
      dataCadastro: [tarefa.dataCadastro],
      dataAtualizacao: [tarefa.dataAtualizacao],
      dataConclusao: [tarefa.dataConclusao]
    })
  }

  botaoCancelar() {
    this.redirecionarParaTarefas();
  }

  botaoSalvar() {
    let request = new TarefaAtualizarRequest(this.tarefaForm.value);

    this.tarefasService.atualizarTarefa(this.id, request).subscribe({
      next: () => {
        this.redirecionarParaTarefas();
        this.toastService.sucesso("Sucesso", "Tarefa atualizada com sucesso.");
      }
    })
  }

  private redirecionarParaTarefas() {
    this.router.navigate(['/tarefas']);
  }
}
