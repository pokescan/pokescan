import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) {}

  async openLoader(): Promise<any> {
    this.loader = await this.loadingController.create({
      message: 'Veuillez patienter...',
      spinner: 'crescent',
      animated: true,
      backdropDismiss: false,
      translucent: true
    });

    this.loader.present();
  }

  dismiss(): void {
    if (this.loader) {
      this.loader.dismiss();
      delete this.loader;
    }
  }
}
