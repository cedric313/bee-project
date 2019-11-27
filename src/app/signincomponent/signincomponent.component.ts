import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {SigninService} from '../services/signin.service';


@Component({
  selector: 'app-signincomponent',
  templateUrl: './signincomponent.component.html',
  styleUrls: ['./signincomponent.component.scss']
})
export class SignincomponentComponent implements OnInit {
  private user: User = new User('','');
  constructor(private siginService: SigninService) { }

  ngOnInit() {

  }

  checkUser() {
    let userToJson = JSON.stringify(this.user);
    console.log(userToJson);
    this.siginService.postUserAuthentication(userToJson).subscribe( res => console.log(res));
  }
}
