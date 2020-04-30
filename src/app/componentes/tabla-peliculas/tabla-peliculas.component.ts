import { Component, OnInit, Input } from '@angular/core';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {

  @Input() listadoPeliculas: Pelicula[] ;
  
  
  constructor() { 
 
  }

  ngOnInit(): void {
  }

}
