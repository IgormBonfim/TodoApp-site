import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private tempoDoToast = 3000;

  constructor(private toastr: ToastrService) { }

  public erro(titulo: string, mensagem: string) {
    this.toastr.error(mensagem, titulo, {
      timeOut: this.tempoDoToast
    });
  }

  public sucesso(titulo: string, mensagem: string) {
    this.toastr.success(mensagem, titulo, {
      timeOut: this.tempoDoToast
    });
  }

}
