import { Injectable } from "@angular/core";
import { UserModel } from '../models/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from "rxjs";



@Injectable({ 
  providedIn: 'root' 
})
export class UserService {
    

  URL_SUPABASE = 'https://rujctknkvdrsvoulnvjm.supabase.co/rest/v1/'

  constructor(private _httpclient: HttpClient) { }

  supabaseheaders = new HttpHeaders().set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1amN0a25rdmRyc3ZvdWxudmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0NzA4OTEsImV4cCI6MjAyMTA0Njg5MX0.9WmVq8Mzz8xoZPC3RvX70whclZVsvd9tpk78pInDSvY')

  getUserListSupaBase(): Observable<UserModel[]> {
      return this._httpclient.get<UserModel[]>(this.URL_SUPABASE, { headers: this.supabaseheaders, responseType: 'json' });
  }

  getUser(email: string): Observable<UserModel> {
      return this._httpclient.get<UserModel>(this.URL_SUPABASE+'USUARIO?email=eq.'+email, { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' });
  }

  getLoginUser(email: string, contrasenha: string): Observable<UserModel> {
    const params = {
      select: '*,tipo_usuario',
      email: `eq.${email}`,
      contrasenha: `eq.${contrasenha}`
    }; 
    const headers = this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'); 
    return this._httpclient.get<UserModel>(`${this.URL_SUPABASE}USUARIO`, { params, headers, responseType: 'json' });
  }
  
    
  
}