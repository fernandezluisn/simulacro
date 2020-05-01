import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[] ;
  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>();
  
  constructor() { 
 
  }

  ngOnInit(): void {
  }
  mostrarDetalles(pelicula:Pelicula)
  {
    console.info("a ver si anda ",pelicula);
    this.peliculaSeleccionada.emit(pelicula);
  }
}
