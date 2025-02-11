import 'zone.js';  
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { provideRouter, Routes } from '@angular/router';
import { JugadoresComponent } from './app/components/jugadores/jugadores.component';
import { JugadorDetalleComponent } from './app/components/jugador-detalle/jugador-detalle.component';

const routes: Routes = [
  { path: '', component: JugadoresComponent }, 
  { path: 'jugador/:id', component: JugadorDetalleComponent }, 
];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));