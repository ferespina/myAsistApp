import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
import { ClaseService} from '../service/clase.service';
import { lastValueFrom } from 'rxjs';
import { Clase } from '../models/Clase';
import { OverlayEventDetail } from '@ionic/core/components';
import { ClaseModel } from '../models/ClaseModel';
import { Injectable } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';


@Injectable({ 
  providedIn: 'root' 
})

@Component({
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss']
})
export class ClasePage implements OnInit {

  nuevaClase: ClaseModel = {
    cod_clase: '',
    fecha: '',
    horario: '',
    aula: '',
    //numrun: 0, // Aquí debes establecer el valor correcto del usuario
    //cod_asignatura: '',
  };

  constructor(private claseService: ClaseService) {}

  crearNuevaClase() {
    this.claseService.crearClase(this.nuevaClase).subscribe(
      (claseCreada) => {
        console.log('Clase creada:', claseCreada);
      },
      (error) => {
        console.error('Error al crear la clase:', error);
      }
    );
  }

    ngOnInit() {
      
    }
    
}