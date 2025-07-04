import { Component, inject, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat implements OnInit{

  chatService = inject(ChatService);

  ngOnInit(){
    this.chatService.consultarOpenAiApi("Que es Node?").subscribe((result:any) => {
     console.log(result.choices[0].message.content);
    })
     
  }  

}
