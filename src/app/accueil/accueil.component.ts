import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  private isCheptel: boolean = false;
  private isRuche: boolean = false;

  @Input()
  idUser: number;

  @Input()
  liveStock: any[];

  @Input()
  userName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.idUser);
    console.log(this.liveStock[0].postalCode);
  }

  changeStateCheptel() {
    this.isCheptel = !this.isCheptel;
  }

  changeStateRuche() {
    this.isRuche = !this.isRuche;
  }
}
