import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private httpClient: HttpClient) { }

  public teste() {
    return this.httpClient.get<TarefaResponse[]>("http://localhost:25826/api/tarefas")
  }
}
