import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JugadoresComponent } from './components/jugadores/jugadores.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JugadoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jugadores fifa';
}