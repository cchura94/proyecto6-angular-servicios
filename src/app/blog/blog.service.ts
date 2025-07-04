import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpPrueba: HttpClient) { }

  conectarConDevToApi():Observable<any>{
    return this.httpPrueba.get('https://dev.to/api/articles');
  }

  suma(n1: number, n2:number):string{
    let respuesta: number;
    respuesta = n1 + n2;
    return "La respuesta es: "+respuesta;
  }

}
