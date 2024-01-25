import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_ce006u2', 'template_74brutc', e.target as HTMLFormElement, 'Qww5fcG16pCmn7ADu')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  constructor() { }

  ngOnInit() {
  }

  
}




