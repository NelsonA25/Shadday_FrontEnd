export class Producto{
    id?:string;
    name: string;
    /*constructor(descripcion: string){
        this.descripcion=descripcion;
    }*/
}

export interface Productos{
    [key:string]:Producto;
}

