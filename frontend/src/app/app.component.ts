import { Component } from '@angular/core';
import { JugadoresComponent } from './components/jugadores/jugadores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JugadoresComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fifa Aplicacion';
}