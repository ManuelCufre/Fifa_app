import { Component } from '@angular/core';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JugadoresComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <router-outlet></router-outlet> <!-- Renderiza las rutas aquí -->
  `,
})
export class AppComponent {
  title = 'Fifa Aplicacion';
}