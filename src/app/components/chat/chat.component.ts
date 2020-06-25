import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string = '';
  mensajes: any[]=[];
  mensajesSubscription: Subscription;
  elemento: HTMLElement;
  constructor(public wsChat: ChatServiceService) { }

  ngOnInit() {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this.wsChat.getMessages().subscribe((msg)=>{
      console.log(msg)
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    })
  }
  ngOnDestroy(){
    this.mensajesSubscription.unsubscribe();
  }
  enviar(){
    if (this.texto.trim().length === 0) {
      return;
    }
    this.wsChat.sendMessage(this.texto);
    this.texto = '';
  }
  recibirMensajes(){
    this.wsChat.getMessages().subscribe((resp)=>{
      console.log(resp);
      
    })
  }
}
