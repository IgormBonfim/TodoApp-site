import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacaoRequest } from 'src/app/shared/models/requests/paginacao.request';
import { PaginacaoResponse } from 'src/app/shared/models/responses/paginacao.response';
import { TarefaAtualizarRequest } from 'src/app/tarefas/models/requests/tarefa-atualizar.request';
import { TarefaInserirRequest } from 'src/app/tarefas/models/requests/tarefa-inserir.request';
import { TarefaResponse } from 'src/app/tarefas/models/responses/tarefa.response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  public apiUrl = environment.ApiBaseUrl + "tarefas/"

  constructor(private httpClient: HttpClient) { }

  listarTarefas(params: PaginacaoRequest): Observable<PaginacaoResponse<TarefaResponse>> {
    return this.httpClient.get<PaginacaoResponse<TarefaResponse>>(
      this.apiUrl,
      {
        params: params as any,
      });
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

  atualizarTarefa(id: string, request: TarefaAtualizarRequest): Observable<TarefaResponse> {
    return this.httpClient.put<TarefaResponse>(`${this.apiUrl}${id}`, request);
  }
}
