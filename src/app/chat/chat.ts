import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit{

  mensaje:string = '';
  respuesta: string = ''

  preguntaSignal = signal({
    tipo: 'user',
    mensaje: '',
    respuesta: ''
  })
  preguntas: Signal<{tipo: string,
                    mensaje: string,
                    respuesta: string}[]> = signal([]);

  // chatService = inject(ChatService);
  constructor(private chatService: ChatService){
    console.log("CONSTRUCTOR")
    // this.obtenerRespuestaOpenAI();
  }

  ngOnInit(){
    console.log("ngOnInit")
  }

  obtenerRespuestaOpenAI(){
    this.preguntaSignal().tipo = 'user';
    this.preguntaSignal().mensaje = this.preguntaSignal().mensaje;
    this.preguntas().push({
      mensaje: this.preguntaSignal().mensaje,
      respuesta: '',
      tipo: 'user'})

    this.chatService.consultarOpenAiApi(this.preguntaSignal().mensaje).subscribe((result:any) => {
      // console.log(result.choices[0].message.content);
      // this.respuesta = result.choices[0].message.content
    

      this.preguntaSignal.set({
        mensaje: this.preguntaSignal().mensaje,
        respuesta: result.choices[0].message.content,
        tipo: 'ia'})

      this.preguntas().push({
        mensaje: this.preguntaSignal().mensaje,
        respuesta: result.choices[0].message.content,
        tipo: 'ia'})

      
      // this.respuesta = result.choices[0].message.content
    })

     this.preguntaSignal().mensaje = '';
       this.preguntaSignal().tipo = '';
       this.preguntaSignal().respuesta = '';

     console.log(this.preguntas())
  }

}
