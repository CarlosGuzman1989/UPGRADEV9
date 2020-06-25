import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus:boolean = false;
  public usuario: Usuario = null;

  constructor(private socket: Socket, private router: Router) { 
    this.cargarStorage();
    this.checkStatus();
  }
   checkStatus(){
     this.socket.on('connect', () =>{
       console.log('conectado al servidor ');
       this.socketStatus = true;
       this.cargarStorage();
     })
     this.socket.on('disconnect', () =>{
       console.log('desconectado del servidor ');
       this.socketStatus = false;
     })
   }
   emit( evento:string, payload?: any, callback?:Function ){
     console.log('emitiendo mensaje');
     
    this.socket.emit(evento, payload, callback);
   }
   listen( evento:string ){
     console.log('Escuchar mensaje');
     return this.socket.fromEvent(evento);
   }
   loginWs( nombre:string){
     return new Promise((resolve, reject)=>{
       this.emit('configurar-usuario', {nombre}, resp => {
         this.usuario = new Usuario( nombre );
          this.guardarStorage();
          resolve();
       });
     });
   }
   getUsuario(){
     return this.usuario;
   }
   guardarStorage(){
     localStorage.setItem('usuario', JSON.stringify( this.usuario) );
   }
   cargarStorage(){
     if (localStorage.getItem('usuario')) {
       this.usuario = JSON.parse(localStorage.getItem('usuario'));
       this.loginWs( this.usuario.nombre );
     }
   }
   logoutWS(){
    this.usuario = null;
    localStorage.removeItem('usuario')
    const payload = {
      nombre: 'Invitado'
    }
    this.emit('configurar-usuario', payload, ()=>{});
    this.router.navigateByUrl('/');
   }
}
