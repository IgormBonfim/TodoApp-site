import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  private showAlert(
    mensagem: string,
    icone: SweetAlertIcon,
    titulo?: string
  ): Promise<SweetAlertResult<any>> {

    const swalButtonsConfig = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    return swalButtonsConfig.fire({
      title: titulo,
      text: mensagem,
      icon: icone,
    })
  }

  public sucesso(mensagem: string, titulo?: string): Promise<SweetAlertResult<any>> {
    return this.showAlert(mensagem, 'success', titulo);
  }

  public erro(mensagem: string, titulo?: string): Promise<SweetAlertResult<any>> {
    return this.showAlert(mensagem, 'error', titulo);
  }

  public aviso(mensagem: string, titulo?: string): Promise<SweetAlertResult<any>> {
    return this.showAlert(mensagem, 'warning', titulo)
  }

  public info(mensagem: string, titulo?: string): Promise<SweetAlertResult<any>> {
    return this.showAlert(mensagem, 'info', titulo)
  }

  public pergunta(mensagem: string, titulo?: string): Promise<SweetAlertResult<any>> {
    return this.showAlert(mensagem, 'question', titulo)
  }

  public alertPersonalizado(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
    return Swal.fire(options);
  }
}
