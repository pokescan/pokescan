import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

type ToastPosition = 'top' | 'bottom' | 'middle';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toast: HTMLIonToastElement;

  constructor(private toastController: ToastController) {}

  openErrorToast(error: unknown): Promise<void> {
    const message = `Une erreur est survenue. Veuillez réessayer.`;
    return this.open(message);
  }

  private async open(
    message: string,
    duration = 5000,
    position: ToastPosition = 'bottom'
  ): Promise<void> {
    this.checkExistingToast();
    this.toast = await this.toastController.create({
      message,
      duration,
      position
    });

    this.toast.present();
  }

  private checkExistingToast(): void {
    if (this.toast) {
      this.toast.dismiss();
      delete this.toast;
    }
  }
}
