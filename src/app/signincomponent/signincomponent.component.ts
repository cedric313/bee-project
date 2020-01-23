import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../models/user';
import {SigninService} from '../services/signin.service';


@Component({
  selector: 'app-signincomponent',
  templateUrl: './signincomponent.component.html',
  styleUrls: ['./signincomponent.component.scss']
})
export class SignincomponentComponent implements OnInit {
  private user: User = new User('');
  private userCreateAccount: boolean = false;
  private userWantSignIn: boolean = false;
  private connection: User = new User();
  private isUserConnect: boolean = false;

  @Output() sendId: EventEmitter<any> = new EventEmitter<any>();


  constructor(private siginService: SigninService) { }

  ngOnInit() {

  }

  checkUser() {
    let userToJson = JSON.stringify(this.user);
    console.log(userToJson);
    this.siginService.userConnection(userToJson).subscribe(
       response => {
         this.connection.email = response.user.email;
         this.connection.name = response.user.name;
         this.connection.firstname = response.user.firstname;
         this.connection.id = response.user.idUser;
         this.connection.liveStocks = response.user.liveStocks;
       },
      err => console.error('Observer got an error: ' + err),
      () => this.toSendIdUser(),
    );
  }

  isUserIsValid() {
    console.log(this.connection);
    if(this.connection.email === this.user.email) {
      this.isUserConnect = true;
      console.log('connecté');
      alert('utilisateur connecté');
    } else {
      alert('connexion impossible');
      console.log('connexion impossible');
    }
  }

  createAccount() {
    console.log(this.userWantSignIn);
    let userToJson = JSON.stringify(this.user);
    this.siginService.createUserAccount(userToJson).subscribe(res => console.log(res))

  }

  wantCreateAccount() {
    this.userCreateAccount = true;
  }

  wantSignIn() {
    this.userCreateAccount = false;
    this.userWantSignIn = true;
  }

  public toSendIdUser(){
    this.isUserIsValid();
    this.sendId.emit(this.connection.id);
    console.log(this.connection.id);
  }

}
