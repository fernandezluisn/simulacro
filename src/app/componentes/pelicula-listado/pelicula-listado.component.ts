import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  reyLeon:Pelicula;
  peliculas:Pelicula[];
  titanic:Pelicula;
  zoolander:Pelicula;
  
  constructor() { 
    this.reyLeon=new Pelicula(1, "Rey Leon", "infantil",  "11-11-1990",  200, '../assets/reyleon.jpg');
    this.titanic=new Pelicula(2, "Titanic", "romantica",  "11-11-1993",  300, '../assets/tit.jpg');
    this.zoolander=new Pelicula(3, "Zoolander", "comedia",  "11-11-1995",  100, '../assets/zoo.jpg');
    this.peliculas=new Array();
    this.peliculas.push(this.reyLeon);
    this.peliculas.push(this.titanic);
    this.peliculas.push(this.zoolander);
  }
  ngOnInit(): void {
  }

}
