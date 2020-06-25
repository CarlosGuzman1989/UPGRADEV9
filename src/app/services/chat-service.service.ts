import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private wsService: WebsocketService) {
     
   }
   sendMessage(mensaje: string){
     const payload = {
        de: this.wsService.usuario.nombre,
        cuerpo: mensaje
     };
     this.wsService.emit('mensaje', payload);
     
   }
   getMessages(){
    return this.wsService.listen('mensaje-nuevo');
   }
   getMessagesPrivate(){
    return this.wsService.listen('mensaje-privado');
   }
   getUsuariosActivos(){
    return this.wsService.listen('usuarios-activos');
   }
   getObtenerUsuarios(){
    this.wsService.emit('obtener-usuarios');
    //  return this.wsService.listen('usuarios-activos');
   }

}
