import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioPageRoutingModule } from './usuario-routing.module';
import { UsuarioPage } from './usuario.page';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UsuarioPage],
  providers: [{provide: BarcodeScanner, useClass: BarcodeScanner}]
})
export class UsuarioPageModule {}
