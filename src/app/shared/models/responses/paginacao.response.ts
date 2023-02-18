export class PaginacaoResponse<T> {
  public totalItems: number;
  public pagina: number;
  public quantidade: number;
  public lista: Array<T>;

  constructor(params: Partial<PaginacaoResponse<T>>) {
    this.totalItems = params.totalItems || 0;
    this.pagina = params.pagina || 0;
    this.quantidade = params.quantidade || 0;
    this.lista = params.lista || [];
  }
}
