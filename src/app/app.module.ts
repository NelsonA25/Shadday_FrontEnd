import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ClientesCrearComponent } from './components/clientes-crear/clientes-crear.component';
import { ClientesListarComponent } from './components/clientes-listar/clientes-listar.component';
import { ProductosCrearComponent } from './components/productos-crear/productos-crear.component';
import { ProductosListarComponent } from './components/productos-listar/productos-listar.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    ProductosComponent,
    InvoicesComponent,
    ClientesCrearComponent,
    ClientesListarComponent,
    ProductosCrearComponent,
    ProductosListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
