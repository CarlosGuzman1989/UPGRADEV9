import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../services/chat-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;
  constructor(public wsChat: ChatServiceService) { }

  ngOnInit() {
    this.usuariosActivosObs = this.wsChat.getUsuariosActivos();
    this.wsChat.getObtenerUsuarios();

  }

}
