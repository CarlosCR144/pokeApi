import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from './services/pokemons.service';
import { ListPokemonsComponent } from './pages/list-pokemons/list-pokemons.component';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ListPokemonsComponent, DetailPokemonComponent],
  imports: [
    CommonModule, CoreModule, SharedModule
  ],
  providers: [PokemonsService]
})
export class PokemonsModule { }
