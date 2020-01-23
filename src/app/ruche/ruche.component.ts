import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruche',
  templateUrl: './ruche.component.html',
  styleUrls: ['./ruche.component.scss']
})
export class RucheComponent implements OnInit {

  @Input()
  private livestock: any;

  constructor() { }

  ngOnInit() {
  }

}
