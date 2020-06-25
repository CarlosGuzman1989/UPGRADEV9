import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatServiceService } from './services/chat-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-socket-angular';

  constructor(public wsService: WebsocketService, public chatService: ChatServiceService){
    // 
  }
  ngOnInit(){
    this.chatService.getMessagesPrivate().subscribe((resp)=>{
      console.log(resp);
    });
    // this.chatService.getMessages().subscribe((resp)=>{
    //   console.log(resp);
      
    // })
  }


}

