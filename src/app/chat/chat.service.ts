import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  http = inject(HttpClient);

  constructor() { }

  consultarOpenAiApi(mensaje: string){
    return this.http.post("https://api.openai.com/v1/chat/completions", {
      "model": "gpt-4.1",
      "messages": [
          {
            "role": "system",
            "content": "Actua como un vendedor de una tienda de equipos electronicos, responde solo con la inteción de venta en no más de 20 palabras"
          },
          {
              "role": "user",
              "content": mensaje
          }
      ]
  }, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer AQUI_TOKEN_OPENAI"
    }
  })
  }
}
