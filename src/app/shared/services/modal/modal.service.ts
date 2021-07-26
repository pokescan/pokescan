import { Injectable, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  async open(component: Type<any>): Promise<void> {
    this.checkExistingModal();

    await this.genericOpenModal({
      component,
      animated: true,
      swipeToClose: true,
      showBackdrop: true
    });
  }
  async openSwipeableModal<R>(
    component: Type<any>,
    routerOutletElement: any,
    data?: Record<string, unknown>
  ): Promise<R> {
    this.checkExistingModal();

    return await this.genericOpenModal<R>({
      component,
      animated: true,
      swipeToClose: true,
      showBackdrop: true,
      cssClass: 'half-opened-modal',
      presentingElement: routerOutletElement,
      componentProps: {
        ...data
      }
    });
  }

  closeCurrentModal(): void {
    this.checkExistingModal();
  }

  private async genericOpenModal<R>(options: ModalOptions): Promise<R> {
    this.modal = await this.modalController.create(options);

    await this.modal.present();

    const { data } = await this.modal.onDidDismiss();

    return data;
  }

  private checkExistingModal(): void {
    if (this.modal) {
      this.modal.dismiss();
      delete this.modal;
    }
  }
}
