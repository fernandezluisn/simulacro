import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  eliminarPelicula(peli:Pelicula){
    
    localStorage.removeItem(peli.nombre);
  }

  guardarPelicula(peli:Pelicula){
    let p1=JSON.stringify(peli);
    localStorage.setItem(peli.nombre,p1);
  }

  tomarPelicula(nombre:string):Pelicula{    
    let peli=localStorage.getItem(nombre);
    let p1:Pelicula=JSON.parse(peli);
    return p1;
  }
}
