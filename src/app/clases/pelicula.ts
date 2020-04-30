export class Pelicula{
    id:number;
    nombre:string;
    tipo: string;
    fechaDeEstreno: string;
    cantidadPublico:number;
    foto:string;

    constructor(id:number, nombre: string, tipo:string, fecha:string, cantidad:number, foto:string){
        this.cantidadPublico=cantidad;
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaDeEstreno=fecha;
        this.foto=foto;
    }

}