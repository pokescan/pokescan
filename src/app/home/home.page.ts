import { Component } from '@angular/core';
import { AbilityService } from '../core/services/ability/ability.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private abilityService: AbilityService) {}
}
