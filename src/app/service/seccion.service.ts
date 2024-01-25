import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clase } from '../models/Clase';

@Injectable({
  providedIn: 'root',
})
export class SeccionService {
    URL_BASE = 'https://rujctknkvdrsvoulnvjm.supabase.co/rest/v1/'
    supabaseHeaders = new HttpHeaders().set("apiKey",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1amN0a25rdmRyc3ZvdWxudmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NzA4OTEsImV4cCI6MjAyMTA0Njg5MX0.9WmVq8Mzz8xoZPC3RvX70whclZVsvd9tpk78pInDSvY')
   

  constructor(private http: HttpClient) {}

  obtenerSeccionPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener una sección por su código de asignatura
    const url = `${this.URL_BASE}/SECCION?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
  obtenerClasesPorCodAsignatura(codAsignatura: string): Observable<any> {
    // Realiza una solicitud HTTP (GET) para obtener clases por su código de asignatura
    const url = `${this.URL_BASE}/CLASE?cod_asignatura=${codAsignatura}`;

    return this.http.get(url);
  }
  obtenerCodigosClase(): Observable<string[]> {
    return this.http.get<string[]>(this.URL_BASE + 'CLASE', {
      params: {
        select: 'cod_clase', // Filtrar para obtener solo la columna cod_clase
      },
      headers: this.supabaseHeaders.set('Accept', 'application/json'),
      responseType: 'json',
    });
  }

  insertarAsistencia(codClase: string, estadoAsistencia: string): Observable<any> {
    const body = {
      cod_clase: codClase,
      estado: estadoAsistencia,
    };
    const url = `${this.URL_BASE}/ASISTENCIA`;

    return this.http.post(url, body, {
      headers: this.supabaseHeaders.set('Content-Type', 'application/json'),
      responseType: 'json',
    });
  }

}