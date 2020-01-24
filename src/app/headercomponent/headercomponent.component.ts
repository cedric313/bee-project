import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {SigninService} from "../services/signin.service";

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnInit {

  private isCheptel: boolean = false;
  private isRuche: boolean = false;
  private user: User = new User();
  private show: boolean = false;
  showLiveStock: boolean = false;

  constructor(private signInService: SigninService) { }

  ngOnInit() {

  }

  changeStateShow() {
    this.show = !this.show;
  }

  changeStateCheptel() {
    this.isCheptel = !this.isCheptel;
  }

  changeStateRuche() {
    this.isRuche = !this.isRuche;
  }

  onGetIdUserFromSignIn(user: any){
    console.log(user);
    this.user.email = user.email;
    this.user.name = user.name;
    this.user.firstname = user.firstname;
    this.user.id = user.id;
    this.user.liveStocks = user.liveStocks;
    this.signInService.listlivestock = user.liveStocks;
    console.log(user);
  }

}
