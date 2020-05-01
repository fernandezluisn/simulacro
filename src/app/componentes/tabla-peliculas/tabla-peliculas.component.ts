import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pelicula} from '../../clases/pelicula';
import { LocalstorageService } from 'src/app/servicio/localstorage.service';

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

  eliminarFila(prod: Pelicula){ 
    let ls=new LocalstorageService();
    var i=this.listadoPeliculas.indexOf(prod);
    this.listadoPeliculas.splice(i, 1);
    ls.eliminarPelicula(prod);
  }
}
