import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { JugadoresService } from '../../services/jugadores.service'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jugador-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jugador-detalle.component.html',
  styleUrl: './jugador-detalle.component.css'
})
export class JugadorDetalleComponent implements OnInit{
  jugador: any;
  

  constructor(
    private service: JugadoresService,
    private route: ActivatedRoute
  )
  {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.service.obtenerJugadorPorId(id).subscribe((data) => {
      this.jugador = data;
    });
  }
  

}
