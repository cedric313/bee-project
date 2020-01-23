import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.component.html',
  styleUrls: ['./livestock.component.scss']
})
export class LivestockComponent implements OnInit {

  @Input()
  private liveStock: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.liveStock[0])
  }

}
