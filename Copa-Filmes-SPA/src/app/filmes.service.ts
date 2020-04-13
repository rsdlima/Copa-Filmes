import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmeModel } from './filmes/filme.model';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http: HttpClient) { }
  
  filmes : Array<FilmeModel> = new Array();

  listarfilmes(): Observable<any>{
    return this.http.get("http://localhost:54647/api/filme")
  }

  ComecarCopa(filmes:Array<FilmeModel>):Observable<any>{
    return this.http.post("http://localhost:54647/api/filme", filmes);
  }

}
