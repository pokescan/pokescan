import { Component } from '@angular/core';
import { HOME_CARDS } from './shared/constants';
import { IHomeCard } from './shared/interfaces/home.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  homeCards: IHomeCard[] = HOME_CARDS;
  constructor() {}
}
