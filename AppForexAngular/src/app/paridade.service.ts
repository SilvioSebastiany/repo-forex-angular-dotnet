import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paridade } from './Paridade';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ParidadeService {
  url = 'http://localhost:5122/api/Paridades'

  constructor(private http: HttpClient) {this.url}

  PegarTodos():Observable<Paridade[]>{
    return this.http.get<Paridade[]>(this.url);
  }

  PegarPeloId(paridadeId: number): Observable<Paridade>{
    const apiUrl = `${this.url}/${paridadeId}`;

    return this.http.get<Paridade>(apiUrl);
  }

  SalvarParidade(paridade: Paridade) : Observable<any>{
    return this.http.post<Paridade>(this.url, paridade, httpOptions);
  }

  AtualizarParidade(paridade: Paridade) : Observable<any>{
    return this.http.put<Paridade>(this.url, paridade, httpOptions)
  }

  ExcluitPeloId(paridadeId: number): Observable<any>{
    const apiUrl = `${this.url}/${paridadeId}`;
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
