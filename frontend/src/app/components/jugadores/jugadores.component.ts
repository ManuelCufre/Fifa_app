import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { JugadoresService } from '../../services/jugadores.service'; 
import { RouterModule } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {
  jugadores: any[] = [];
  primerosJugadores: any [] = [];
  constructor(private jugadoresService: JugadoresService) {} 

  ngOnInit() {
    this.jugadoresService.obtenerJugadores().subscribe((data) => {
      this.jugadores = data;
      this.primerosJugadores = this.jugadores.slice(0, 50);
    });

    
  }
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.primerosJugadores);
    const workbook: XLSX.WorkBook = { Sheets: { 'Datos': worksheet }, SheetNames: ['Datos'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    this.saveAsExcelFile(excelBuffer, 'Lista jugadores');
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = `${fileName}_export_${new Date().getTime()}.xlsx`;
    link.click();
  }
}