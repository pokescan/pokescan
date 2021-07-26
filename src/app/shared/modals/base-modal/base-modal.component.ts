import { AfterContentInit, Component, Type, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'pks-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements AfterContentInit {
  @ViewChild(IonNav) nav: IonNav;

  rootPage: Type<any>;

  dataToPassOn: Record<string, unknown>;

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.nav.setRoot(this.rootPage, { ...this.dataToPassOn });
    });
  }
}
