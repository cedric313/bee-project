import {Component, OnInit} from '@angular/core';
import {SigninService} from "../services/signin.service";
import {GetLivestockService} from "../services/get-livestock.service";
import {Livestock} from "../models/livestock";

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.component.html',
  styleUrls: ['./livestock.component.scss']
})
export class LivestockComponent implements OnInit {

   liveStock: Livestock[]= new Array<Livestock>();
   idUser: number;

  constructor(private signInService: SigninService , private liveStockService: GetLivestockService) { }

  ngOnInit() {
    this.idUser = this.signInService.idUser;
    console.log(this.idUser);
    this.liveStockService.getLivestock(this.idUser).subscribe(
      response => {
        this.liveStockService.liveStock = response;
        this.liveStock = this.liveStockService.liveStock;
      },
      err => console.log(err),
      () => console.log(this.liveStock)
    )
  }
}
