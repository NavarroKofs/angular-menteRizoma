import { Component, OnInit } from '@angular/core';
import { SrvRpServiceService } from "../../services/srv-rp-service.service";
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-cmp-reset-password',
  templateUrl: './cmp-reset-password.component.html',
  styleUrls: ['./cmp-reset-password.component.css'],
  providers: [SrvRpServiceService]
})
export class CmpResetPasswordComponent implements OnInit {

  constructor(private SrvRpServiceService: SrvRpServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  recuperarPassword = (data) =>{
    this.SrvRpServiceService.recuperar({user: data['email']});
    this.router.navigate(['/changePassword']);
  }
}
