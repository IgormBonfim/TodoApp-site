import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { TarefasService } from 'src/app/tarefas/services/tarefas.service';

@Injectable({
  providedIn: 'root'
})
export class TarefasEditarResolver implements Resolve<TarefaResponse> {

  constructor(private tarefasService: TarefasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): TarefaResponse | Observable<TarefaResponse> | Promise<TarefaResponse> {

    if(route.params && route.params['id']) {
      let id: string = route.params['id'];

      return this.tarefasService.recuperarTarefa(id)
    }

    return of({
      id: "",
      nome: "",
      detalhes: "",
      status: "",
      dataCadastro: new Date(),
      dataAtualizacao: new Date(),
      dataConclusao: new Date()
    });
  }
}
