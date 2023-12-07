import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PokemonsService<PokeApiResponse> {
  apiUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private apiService: ApiService<PokeApiResponse>) { }

  getPokemons(): Observable<PokeApiResponse> {
    return this.apiService.get(`${this.apiUrl}/pokemon`, {})
  }
}
