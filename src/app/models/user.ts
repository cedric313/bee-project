export class User {
  public email: string;
  public password: string;
  public name: string;
  public firstname: string;


  constructor(email?: string, password?: string) {
    this.email = email;
    this.password = password;
  }
}
