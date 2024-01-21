import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent implements OnInit{


  productoForm!:FormGroup;

  producto:Producto= new Producto();
  resProd:Producto[]=[]

constructor(private fb: FormBuilder, private productService:ProductoService, ){}
  ngOnInit(): void {
    this.IniciarFormulario();
    //this.ObtenerProductos();
    //this.ObtenerProductosNoS();
  }

  IniciarFormulario(){
    this.productoForm = this.fb.group({
      nombre:[this.producto.name],
      id:[this.producto.id]
    }) 
  }


  ObtenerProductos(){
    this.productService.ObtenerProd()
    .subscribe( respuesta =>{
      console.log('Lista de Productos', respuesta);
      this.resProd= respuesta;
    },error =>{
      this.mostrarError('Error al obtener Productos');
    });
  }

  ObtenerProductosNoS(){
    this.productService.ObtenerProd()
    .pipe(
      tap(respuesta =>{
        console.log('Lista de Productos NOS', respuesta);
        this.resProd= respuesta;
      })
    )
    .subscribe({
      error:()=>this.mostrarError("Error al obtener Productos")
    });
  }







  guardarProd(){
    console.log('Desde Guardar',this.productoForm);
    if(this.producto.id){
      //this.actualizarProd();
    }else{
      console.log('Desde Guardar Prod',this.productoForm);
      this.producto={
        name:this.productoForm.get('nombre').value
      }
      this.productService.saveProd(this.producto)
      .subscribe(respuesta=>{
        console.log('respuesta desde guardar', respuesta);
        this.ObtenerProductos();
        this.productoForm.reset();
        swal.fire({
          title:"Producto Guardado",
          text:"Producto Guardado con Exito",
          icon: "success",
          confirmButtonText:"OK",
          confirmButtonColor:"primary"
        });
        this.limpiarModelo();
      },error=>{
        this.mostrarError("error al guardar producto")
      });
    }

  }





  modificarModelo(prod: Producto){
    this.producto.id=prod.id;
    this.producto.name=prod.name;
    this.IniciarFormulario();
  }


  Actualizar(){
    console.log('Desde Actualizar');
    this.producto={
      name:this.productoForm.get('nombre').value,
      id:this.productoForm.get('id').value
    }
    this.productService.actualizarProd(this.producto)
    .subscribe(respuesta=>{
      console.log('respuesta desde actualizar', respuesta);
      this.ObtenerProductos();
      this.productoForm.reset();
      swal.fire({
        title:"Producto Actualizado",
        text:"Producto Actualizado con Exito",
        icon: "success",
        confirmButtonText:"OK",
        confirmButtonColor:"primary"
      });
    },error=>{
      this.mostrarError("Error al Actualizar Producto");
    });
  }


  eliminar(prod:Producto){
    swal.fire({
      title:" ELiminar Producto",
      text:"desea eliminar el Producto :"+ prod.name+"?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText:"SI",
      confirmButtonColor:"primary",
      cancelButtonText:"NO"
    }).then((result)=>{
      if(result.isConfirmed){
        this.productService.eliminarProd(prod.id)
        .subscribe(respuesta=>{
          console.log("Desde Eliminar", respuesta);
          this.ObtenerProductos();
          swal.fire({
            title:"Producto Eliminado",
            text: "Producto Eliminado con Exito",
            icon:"success",
            confirmButtonText:"OK"
          })
        },error=>{
          this.mostrarError("error al eliminar Producto");
        })
      }
      else{

      }
    });
  }





  mostrarError(arg0: string) {
    swal.fire({
      title: "ERROR",
      text: arg0 + " Intentalo de Nuevo!!",
      icon:"error",
      confirmButtonText:"Aceptar"
  });
  }

  limpiarModelo(){
    this.producto={
      id:'',
      name:''
    }
    this.IniciarFormulario();
  }
  


}
