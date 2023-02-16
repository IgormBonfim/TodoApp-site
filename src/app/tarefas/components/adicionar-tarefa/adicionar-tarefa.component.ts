import { TarefaInserirRequest } from 'src/app/tarefas/models/requests/tarefa-inserir.request';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.scss']
})
export class AdicionarTarefaComponent implements OnInit {

  public tarefaForm!: FormGroup;
  public subject!: Subject<boolean>;

  constructor(
    public formBuilder: FormBuilder,
    public bsModelRef: BsModalRef,
    public tarefasService: TarefasService) {}

  ngOnInit(): void {
    this.bsModelRef.setClass("modal-lg");
    this.construirFormulario()
    this.subject = new Subject()
  }

  construirFormulario() {
    this.tarefaForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      detalhes: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  adicionarTarefa() {
    const tarefa = this.tarefaForm.getRawValue();
    const request = new TarefaInserirRequest(tarefa);


    this.tarefasService.adicionarTarefa(request).subscribe({
      next: (res: TarefaResponse) => {
        this.bsModelRef.hide()
        this.subject.next(true);
      }
    });
  }

}
