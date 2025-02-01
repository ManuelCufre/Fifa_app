import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  players: any[] = []; 

  constructor(private playerService: PlayerService) {} 

  ngOnInit(): void {
    this.getPlayers();
  }


  getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.players = data;
      },
      (error) => {
        console.error('Error al obtener los jugadores:', error);
      }
    );
  }
}