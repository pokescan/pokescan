import { Component, Input, ViewChild } from '@angular/core';
import { IonNav, ModalController } from '@ionic/angular';
import { IFilterChoice } from './interfaces/filter-choice.interface';

@Component({
  selector: 'pks-pokedex-filter',
  templateUrl: './pokedex-filter.page.html',
  styleUrls: ['./pokedex-filter.page.scss']
})
export class PokedexFilterPage {
  @ViewChild(IonNav) nav: IonNav;

  /**
   * Title of the modal
   *
   * @type {string}
   * @memberof PokedexFilterPage
   */
  @Input() title: string;

  /**
   * Choices displayed on the page
   *
   * @type {IFilterChoice[]}
   * @memberof PokedexFilterPage
   */
  @Input() choices: IFilterChoice[];

  /**
   * Default choice for the filter
   *
   * @type {string}
   * @memberof PokedexFilterPage
   */
  @Input() defaultChoice: string;

  /**
   * Variable that indicates if ion-back-button should be displayed
   *
   * @memberof PokedexFilterPage
   */
  @Input() isFirstModal = true;

  /**
   * Current choice (only used in subchoiced choices)
   *
   * @type {string}
   * @memberof PokedexFilterPage
   */
  @Input() choice: string;

  /**
   *
   *
   * @memberof PokedexFilterPage
   */
  detailComponent = PokedexFilterPage;

  /**
   * Constructor
   *
   * @param modalController
   */
  constructor(private modalController: ModalController) {}

  /**
   * Close the modal and sends the parent the selectedFilter
   *
   * @param choice
   */
  selectChoice(choice: unknown): void {
    this.modalController.dismiss({
      parentChoice: this.choice,
      selectedChoice: choice
    });
  }

  /**
   * Dismiss the current modal
   */
  dismissModal(): void {
    this.modalController.dismiss();
  }
}
