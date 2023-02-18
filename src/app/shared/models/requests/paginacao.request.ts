export class PaginacaoRequest {
  pagina: number;
  quantidade: number;

  constructor(params: Partial<PaginacaoRequest>) {
    this.pagina = params.pagina || 1;
    this.quantidade = params.quantidade || 10;
  }
}
