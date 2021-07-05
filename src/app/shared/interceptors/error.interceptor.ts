import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@shared/services/loader/loader.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ToastService } from '../services/toast/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // this.loaderService.openLoader();
    return next.handle(req).pipe(
      tap(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        async error => {
          await this.toastService.openErrorToast(error);
        }
      ),
      finalize(() => {
        // this.loaderService.dismiss();
      })
    );
  }
}
