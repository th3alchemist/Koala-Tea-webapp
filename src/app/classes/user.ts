export class User{

    public id:number;
    public email:string;
    public password:string;
    public fname:string;
    public lname:string;
    public address:string;
    public dateOfBirth:string;

    constructor(id:number, email:string, password:string, fname:string, lname:string, address:string, dateOfBirth:string){
      this.id = id
      this.email = email
      this.password = password
      this.fname = fname
      this.lname = lname
      this.address = address
      this.dateOfBirth = dateOfBirth
    }

}