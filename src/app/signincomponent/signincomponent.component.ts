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
  private userCreateAccount: boolean = false;
  private userWantSignIn: boolean = false;
  constructor(private siginService: SigninService) { }

  ngOnInit() {

  }

  checkUser() {
    let userToJson = JSON.stringify(this.user);
    console.log(userToJson);
    this.siginService.userConnection(userToJson).subscribe( res => console.log(res));
  }

  createAccount() {
    console.log(this.userWantSignIn);
    let userToJson = JSON.stringify(this.user);
    this.siginService.createUserAccount(userToJson).subscribe(res => console.log(res))
  }

  wantCreateAccount() {
    this.userCreateAccount = true;
  }

  wantSigin() {
    this.userCreateAccount = false;
    this.userWantSignIn = true;
  }
}
