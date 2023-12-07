import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokeApiResponse } from '../../interfaces/pokemons.interface';

@Component({
  selector: 'app-list-pokemons',
  standalone: false,
  templateUrl: './list-pokemons.component.html',
  styleUrl: './list-pokemons.component.css'
})
export class ListPokemonsComponent implements OnInit {
  pokemons: any[] = []

  constructor(private pokemonsService: PokemonsService<PokeApiResponse>) {}

  ngOnInit() : void {
    this.pokemonsService.getPokemons().subscribe((pokemons: PokeApiResponse) => {
      this.pokemons = pokemons.results
      console.log(pokemons)
    })
  }
}
