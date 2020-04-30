import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../componentes/home/home.component';
import {BusquedaComponent} from '../componentes/busqueda/busqueda.component';
import {PeliculaAltaComponent} from '../componentes/pelicula-alta/pelicula-alta.component';
import {ActorAltaComponent} from '../componentes/actor-alta/actor-alta.component';
import {ActorListadoComponent} from '../componentes/actor-listado/actor-listado.component';
import {PeliculaListadoComponent} from '../componentes/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path:"bienvenido", component:HomeComponent},
  {path:"busqueda", component:BusquedaComponent},
  {path:"peliculas", children:[
    {path:"alta", component:PeliculaAltaComponent},
    {path:"listado", component:PeliculaListadoComponent}
  ]},
  {path:"actor", children:[
    {path:"alta", component:ActorAltaComponent},
    {path:"listado", component:ActorListadoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
