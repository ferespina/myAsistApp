import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { SeccionService } from '../service/seccion.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss']
})
export class UsuarioPage implements OnInit {
  userInfoReceived: UserModel | undefined;
  cod_asignatura: string ='';
  clases: any[];
  tipoUsuarioNombre: string | undefined;
  cod_clase: any;
  code: any
  

  constructor(
    private router: Router,
     private activatedRoute: ActivatedRoute, 
     private seccionService: SeccionService,
     private barcodeScanner : BarcodeScanner) {
    this.clases = [];
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
    console.log("userInfoReceived: ", this.userInfoReceived);
    this.convertirTipoUsuarioNombre();
   }
   ngOnInit() {
    console.log("userInfoReceived en ngOnInit: ", this.userInfoReceived);

  }

  async escanearCodigoQR(){
    this.barcodeScanner.scan().then(barcodeData => {
    this.code =barcodeData.text
    console.log('Barcode data', barcodeData);
    this.router.navigate(['/asistencia']);
    }).catch(err => {
    console.log('Error', err);
    })
  }

  // async escanearCodigoQR() {
  //   try {
  //      const result = await BarcodeScanner.scan();
  //      console.log('Resultado del escaneo:', result);
  //    } catch (error) {
  //      console.error('Error al escanear el código QR:', error);
  //    }
  //  }

  convertirTipoUsuarioNombre() {
    if (this.userInfoReceived) {
      const tipoUsuario = parseInt(this.userInfoReceived?.tipo_usuario, 10);
      if (!isNaN(tipoUsuario))
      if (tipoUsuario === 2) {
        this.tipoUsuarioNombre = 'ALUMNO';
        console.log("nombre alumno es ",this.tipoUsuarioNombre);
      } else {
        this.tipoUsuarioNombre = 'Otro'; // Otra opción de manejo
      }  
    }
  }

  capitalizeFirstLetter(text: string | undefined): string {
    if (text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    return ''; // En caso de que sea undefined
  }
  
  cerrarSesion(){
    this.router.navigate(['/login'])
    console.log('sesion cerrada')
  }
  
}
  
   
  
  
  
  

 

  
