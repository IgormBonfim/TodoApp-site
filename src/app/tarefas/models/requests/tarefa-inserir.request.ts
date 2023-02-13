export class TarefaInserirRequest {
  public nome: string;
  public detalhes: string;

  constructor(params: Partial<TarefaInserirRequest>) {
    this.nome = params.nome || "";
    this.detalhes = params.detalhes || "";
  }
}
