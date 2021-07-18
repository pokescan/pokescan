import { Injectable } from '@angular/core';
import { IPokemonSearchEvent } from '@shared/interfaces/pokemon-search-event.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  pokemons$: BehaviorSubject<IPokemonSearchEvent> = new BehaviorSubject(null);

  get pokemon(): Observable<IPokemonSearchEvent> {
    return this.pokemons$.asObservable();
  }
}
