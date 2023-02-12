import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  public erro(titulo: string, mensagem: string) {
    this.toastr.error(mensagem, titulo, {
      timeOut: 1000
    })
  }
}
