import { Routes } from '@angular/router';
import { JugadorDetalleComponent } from './components/jugador-detalle/jugador-detalle.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

export const routes: Routes = [
  { path: '', component: JugadoresComponent },
  { path: 'jugador/:id', component: JugadorDetalleComponent }, 
];

