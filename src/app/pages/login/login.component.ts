import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre:string = '';
  password: string = '';
  registrado :boolean = false;
  constructor(public wsSocket: WebsocketService, private router: Router) { }

  ngOnInit() {
  }
  iniciarSesion(){
    console.log(this.nombre);
    console.log(this.password);
    this.wsSocket.loginWs(this.nombre).then(()=>{
        this.router.navigateByUrl('/mensajes');
    })
    
  }
  crearCuenta(){
    console.log('crear cuenta');
    this.registrado = true;
  }
  loginCuenta(){
    console.log('login cuenta');
    this.registrado = false;
  }
}
