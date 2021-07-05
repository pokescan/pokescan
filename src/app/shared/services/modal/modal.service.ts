import { Injectable, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  async open(component: Type<any>): Promise<void> {
    this.checkExistingModal();

    this.modal = await this.modalController.create({
      component,
      animated: true,
      swipeToClose: true,
      showBackdrop: true
    });

    this.modal.present();
  }

  closeCurrentModal(): void {
    this.checkExistingModal();
  }

  private checkExistingModal(): void {
    if (this.modal) {
      this.modal.dismiss();
      delete this.modal;
    }
  }
}
