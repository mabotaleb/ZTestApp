export class User {
  $key:string;
  email:string;
  password:string;
  role:string;

  constructor(authData) {
    this.$key    = authData.$key
    this.email = authData.email
    this.password    = authData.password
    this.role=authData.role;
  }
}
  /*export class User {
    email:    string;
    photoURL: string;
    roles:    Roles;
  
    constructor(authData) {
      this.email    = authData.email
      this.photoURL = authData.photoURL
      this.roles    = { reader: true }
    }
  } */