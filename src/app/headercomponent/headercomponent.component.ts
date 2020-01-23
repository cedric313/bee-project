import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnInit {

  private isCheptel: boolean = false;
  private isRuche: boolean = false;
  private idUser: any;
  private show: boolean = false;

  constructor() { }

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

  onGetIdUserFromSignIn(idUser){
    console.log('je suis passé');
    this.idUser = idUser;
  }

}
