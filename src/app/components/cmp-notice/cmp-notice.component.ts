import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SrvComentariosService } from "../../services/srv-comentarios.service";
import { SrvBusquedaService } from "../../services/srv-busqueda.service";
import { IntComentario } from "../../interfaces/int-comentario";
import { IntBusqueda } from 'src/app/interfaces/int-busqueda';

declare var tinymce: any;

@Component({
  selector: 'app-cmp-notice',
  templateUrl: './cmp-notice.component.html',
  styleUrls: ['./cmp-notice.component.css'],
  providers: [SrvComentariosService]
})

export class CmpNoticeComponent implements OnInit {
  comentarios: IntComentario[]; 
  noticia: IntBusqueda; 
  currentUserId: string;

  constructor(private route: ActivatedRoute, private SrvComentariosService: SrvComentariosService, private SrvBusquedaService: SrvBusquedaService) { }
  
  ngOnInit(): void {
    this.getComments();
    this.getNotice();
    
    tinymce.init({
      selector: 'textarea#comentInput',
      height: 500,
      menubar: false,
      toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });
  }

  getNotice = () => { 
    const noticeId = this.route.snapshot.paramMap.get('id');  
    this.SrvBusquedaService.getNotice(noticeId).then(data => {
      this.noticia = data;
    })
  }
  
  getComments = () => { 
    const noticeId = this.route.snapshot.paramMap.get('id');  
    this.SrvComentariosService.getAll(noticeId).then(data => {
      this.comentarios = data;
    })
  }

  newComment = (data) =>{
    let commentContent = tinymce.get("comentInput").getContent({ format: "text" });
    this.SrvComentariosService.newComment(commentContent, this.route.snapshot.paramMap.get('id'));
  }
}
