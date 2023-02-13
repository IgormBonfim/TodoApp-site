import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TarefaInserirRequest } from 'src/app/tarefas/models/requests/tarefa-inserir.request';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  public apiUrl = environment.ApiBaseUrl + "tarefas/"

  constructor(private httpClient: HttpClient) { }

  listarTarefas(): Observable<TarefaResponse[]> {
    return this.httpClient.get<TarefaResponse[]>(this.apiUrl);
  }

  recuperarTarefa(id: string): Observable<TarefaResponse> {
    return this.httpClient.get<TarefaResponse>(`${this.apiUrl}${id}`)
  }

  adicionarTarefa(request: TarefaInserirRequest): Observable<TarefaResponse> {
    return this.httpClient.post<TarefaResponse>(this.apiUrl, request);
  }

  excluirTarefa(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${id}`);
  }
}
