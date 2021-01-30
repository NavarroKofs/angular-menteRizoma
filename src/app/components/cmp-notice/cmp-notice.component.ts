import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SrvComentariosService } from "../../services/srv-comentarios.service";

@Component({
  selector: 'app-cmp-notice',
  templateUrl: './cmp-notice.component.html',
  styleUrls: ['./cmp-notice.component.css']
})
export class CmpNoticeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private comentariosService: SrvComentariosService) { }
  
  ngOnInit(): void {
    const comentContainer = document.getElementById("comentaries-container");
    const noticeId = this.route.snapshot.paramMap.get('id');    
    let comentarios;

    this.comentariosService.getAll({noticeId: noticeId}).then(data => {
      comentarios = data;

      comentarios['data'].forEach(comment => {
        if(comment['isDeleted'] == 0){
          comentContainer.innerHTML += `
            <div class="d-flex flex-row ">
              <p><strong>${comment['author']}</strong></p>
              ${comment["isEdited"] == 1 ? '<p class="text-muted edited">(editado)</p>': ''}
            </div>
            <p>${comment['comment']}</p>
            <hr>
          `;
        }
      });

    })
  }

}
