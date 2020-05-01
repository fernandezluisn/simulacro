import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { RutasRoutingModule } from './rutas/rutas-routing.module';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { LocalstorageService } from './servicio/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,    
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
    RutasRoutingModule,
    MatCardModule, 
    MatTableModule
  ],
  exports:[RouterModule],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
