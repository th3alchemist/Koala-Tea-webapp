export class User{

  public id:number
  public email:string
  public password:string
  public fname:string
  public lname:string
  public address:string
  public dateOfBirth:Date

    constructor(id:number, email:string, password:string, fname:string, lname:string, address:string, dateOfBirth:Date){
      this.id = id
      this.email = email
      this.password = password
      this.fname = fname
      this.lname = lname
      this.address = address
      this.dateOfBirth = new Date()
    }

    public getId(id:number){return this.id;}
}

    /**
     * Getter $email
     * @return {string}
     */
	public get $email(): string {
		return this.email;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $fname
     * @return {string}
     */
	public get $fname(): string {
		return this.fname;
	}

    /**
     * Getter $lname
     * @return {string}
     */
	public get $lname(): string {
		return this.lname;
	}

    /**
     * Getter $address
     * @return {string}
     */
	public get $address(): string {
		return this.address;
	}

}