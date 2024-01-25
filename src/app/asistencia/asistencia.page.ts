import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../service/seccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  cod_clase: string = '';
  clases: any[] = [];
  selectedClase: string = '';
  codClase: string ;
  estadoAsistencia: string;

  constructor(
    private seccionService: SeccionService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  buscarClases() {
    this.seccionService.obtenerCodigosClase().subscribe(
      (data: string[]) => {
        this.clases = data; 
        console.log(this.clases);
      },
      (error) => {
        console.error('Error al buscar clases:', error);
      }
    );
  }

  registrarAsistencia() {
    this.seccionService.insertarAsistencia(this.codClase, this.estadoAsistencia).subscribe(
      (response) => {
        console.log('Estado de asistencia registrado exitosamente:', response);
        this.router.navigate(['/usuario']);
      },
      (error) => {
        console.error('Error al registrar el estado de asistencia:', error);
      }
    );
  }

}
