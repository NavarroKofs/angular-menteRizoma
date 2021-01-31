import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SrvComentariosService } from "../../services/srv-comentarios.service";
import { IntComentario } from "../../interfaces/int-comentario";

@Component({
  selector: 'app-cmp-notice',
  templateUrl: './cmp-notice.component.html',
  styleUrls: ['./cmp-notice.component.css'],
  providers: [SrvComentariosService]
})
export class CmpNoticeComponent implements OnInit {
  comentarios: IntComentario[];  
  currentUserId: string;

  constructor(private route: ActivatedRoute, private SrvComentariosService: SrvComentariosService) { }
  
  ngOnInit(): void {
    this.getComments();
  }
  
  getComments = () => { 
    const noticeId = this.route.snapshot.paramMap.get('id');  
    this.SrvComentariosService.getAll(noticeId).then(data => {
      this.comentarios = data;
    })
  }

  newComment = (data) =>{
    console.log(data);    
  }
}
