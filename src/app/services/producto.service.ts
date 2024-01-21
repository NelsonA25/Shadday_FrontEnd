import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../modelos/producto.model';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlprod: any = `${environment.config.apiUrl}/product.json`;
  
  constructor(private http: HttpClient) { }


  saveProd(prod:Producto){
    return this.http.post(this.urlprod,prod)
  }

  

  ObtenerProd(){
    return this.http.get<Producto>(this.urlprod)
    .pipe(
      map(this.arregloProd)
    );
  }

  arregloProd(prod:Object){
    console.log('Productos: ',prod);
    let productos:Producto[]=[];
    if (prod!==null){
      Object.keys(prod).forEach(llave=>{
        let product:Producto=prod[llave];
        product.id = llave;
        productos.push(product);
      });
    }
    return productos;
  }

  actualizarProd(producto: Producto){
    console.log('Producto a Actualizar', producto.id);
    const prodAux ={...producto};
    delete prodAux.id;
    return this.http.put(`${environment.config.apiUrl}/product/${producto.id}.json`,prodAux);
  }

  eliminarProd(id:any){
    return this.http.delete(`${environment.config.apiUrl}/product/${id}.json`);
  }

}
