import { Routes } from '@angular/router';
import { DetailPokemonComponent } from './modules/pokemons/pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonsComponent } from './modules/pokemons/pages/list-pokemons/list-pokemons.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full',
    },
    {
        path: 'pokemons',
        component: ListPokemonsComponent,
    },
    {
        path: 'pokemons/:id',
        component: DetailPokemonComponent,
    }
];
