import { Component, OnInit } from '@angular/core';
import { SrvRpServiceService } from "../../services/srv-rp-service.service";

@Component({
  selector: 'app-cmp-insert-reset-code',
  templateUrl: './cmp-insert-reset-code.component.html',
  styleUrls: ['./cmp-insert-reset-code.component.css'],
  providers: [SrvRpServiceService]
})
export class CmpInsertResetCodeComponent implements OnInit {

  constructor(private SrvRpServiceService: SrvRpServiceService) { }

  ngOnInit(): void {
  }

  recuperarPassword = (data) =>{
    this.SrvRpServiceService.reestablecer({email: data['email'], code: data['passkey'], password: data['password']});
  }

}
