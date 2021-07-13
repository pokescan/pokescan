import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IFilterChoice } from './interfaces/filter-choice.interface';

@Component({
  selector: 'app-pokedex-filter',
  templateUrl: './pokedex-filter.component.html',
  styleUrls: ['./pokedex-filter.component.scss']
})
export class PokedexFilterComponent {
  /**
   * Title of the modal
   *
   * @type {string}
   * @memberof PokedexFilterComponent
   */
  @Input() title: string;

  /**
   * Choices displayed on the page
   *
   * @type {IFilterChoice[]}
   * @memberof PokedexFilterComponent
   */
  @Input() choices: IFilterChoice[];

  /**
   * Default choice for the filter
   *
   * @type {string}
   * @memberof PokedexFilterComponent
   */
  @Input() defaultChoice: string;

  /**
   * Constructor
   * @param modalController
   */
  constructor(private modalController: ModalController) {}

  /**
   * Close the modal and sends the parent the selectedFilter
   * @param choice
   */
  selectChoice(choice: string): void {
    this.modalController.dismiss({
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
