import { HttpErrorResponse } from '@angular/common/http';
import { ExceptionResponse } from 'src/app/shared/models/responses/exception.response';

export class ErroResponse extends HttpErrorResponse {
  public override error: ExceptionResponse
}
