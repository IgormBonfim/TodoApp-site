export class TarefaAtualizarRequest {
  public nome?: string;
  public detalhes?: string;
  public status?: number;

  constructor(params: Partial<TarefaAtualizarRequest>) {
    this.nome = params.nome;
    this.detalhes = params.detalhes;
    this.status = params.status;
  }
}
