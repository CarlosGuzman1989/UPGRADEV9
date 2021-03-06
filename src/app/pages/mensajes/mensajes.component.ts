import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public wsSocket: WebsocketService, public chatService: ChatServiceService) { }
  
  ngOnInit() {
    console.log('emitinedo mensajes');
    
  }

}
