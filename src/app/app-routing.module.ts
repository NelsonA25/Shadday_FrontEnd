import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ClientesCrearComponent } from './components/clientes-crear/clientes-crear.component';
import { ClientesListarComponent } from './components/clientes-listar/clientes-listar.component';
import { ProductosCrearComponent } from './components/productos-crear/productos-crear.component';
import { ProductosListarComponent } from './components/productos-listar/productos-listar.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  //Routas de Productos
  { path: 'productos', component: ProductosComponent },
  { path: 'productos_crear', component: ProductosCrearComponent },
  { path: 'productos_listar', component: ProductosListarComponent },
  //Rutas de Clientes
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes_crear', component: ClientesCrearComponent },
  { path: 'clientes_listar', component: ClientesListarComponent },
  
  { path: 'invoices', component: InvoicesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
