import { Component, OnInit, Input } from '@angular/core';
import { IntComentario } from '../../interfaces/int-comentario';
import { SrvComentariosService } from "../../services/srv-comentarios.service";

declare var tinymce: any;

@Component({
  selector: 'app-cmp-comentario',
  templateUrl: './cmp-comentario.component.html',
  styleUrls: ['./cmp-comentario.component.css']
})
export class CmpComentarioComponent implements OnInit {
  @Input ('comentario') comentario: IntComentario;
  currentUserId = localStorage.getItem('userId');

  constructor(private comentariosService: SrvComentariosService) { }

  ngOnInit(): void {
    tinymce.init({
      selector: `textarea#editComentInput${this.comentario['commentId']}`,
      height: 200,
      menubar: false,
      toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });
  }

  deleteThis(): void {
    this.comentariosService.deleteComment(this.comentario['commentId']);
  }

  editThis(): void {
    document.getElementById(`editComment${this.comentario.commentId}`).toggleAttribute("class")
  }

  editComment(): void{
    let commentContent =  document.getElementById(`editComment${this.comentario.commentId}`)[0].value;

    this.comentariosService.editComment(commentContent, this.comentario['commentId']);
  }
}
