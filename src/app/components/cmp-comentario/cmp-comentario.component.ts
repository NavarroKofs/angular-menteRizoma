import { Component, OnInit, Input } from '@angular/core';
import { IntComentario } from '../../interfaces/int-comentario';
import { SrvComentariosService } from "../../services/srv-comentarios.service";

@Component({
  selector: 'app-cmp-comentario',
  templateUrl: './cmp-comentario.component.html',
  styleUrls: ['./cmp-comentario.component.css']
})
export class CmpComentarioComponent implements OnInit {
  @Input ('comentario') comentario: IntComentario;
  currentUserId = localStorage.getItem('userId');

  constructor(private comentariosService: SrvComentariosService) { }

  ngOnInit(): void {}

  deleteThis(): void{
    this.comentariosService.deleteComment(this.comentario['commentId']);
  }

}
