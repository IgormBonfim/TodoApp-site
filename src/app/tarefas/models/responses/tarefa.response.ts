export class TarefaResponse {
  public id: string;
  public nome: string;
  public detalhes: string;
  public status: string;
  public dataCadastro: Date;
  public dataAtualizacao?: Date;
  public dataConclusao?: Date

  constructor(params: Partial<TarefaResponse>) {
    this.id = params.id || "";
    this.nome = params.nome || "";
    this.detalhes = params.detalhes || "";
    this.status = params.status || "";
    this.dataCadastro = params.dataCadastro || new Date();
    this.dataAtualizacao = params.dataAtualizacao || undefined;
    this.dataConclusao = params.dataConclusao || undefined;
  }
}
