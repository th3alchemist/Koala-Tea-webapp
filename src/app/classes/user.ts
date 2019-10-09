export class User{

    private id:number;
    private email:string;
    private password:string;
    private fname:string;
    private lname:string;
    private address:string;
    private dateOfBirth:Date;

    constructor(id:number, email:string, password:string, fname:string, lname:string, address:string, dateOfBirth:Date){
      this.id = id
      this.email = email
      this.password = password
      this.fname = fname
      this.lname = lname
      this.address = address
      this.dateOfBirth = new Date()
    }
    
    /**
     * Getter email
     * @return {string}
     */
	public getEmail(): string {
		return this.email;
	}

    /**
     * Getter password
     * @return {string}
     */
	public getPassword(): string {
		return this.password;
	}

    /**
     * Getter fname
     * @return {string}
     */
	public getFname(): string {
		return this.fname;
	}

    /**
     * Getter lname
     * @return {string}
     */
	public getLname(): string {
		return this.lname;
	}

    /**
     * Getter address
     * @return {string}
     */
	public getAddress(): string {
		return this.address;
	}

    /**
     * Getter dateOfBirth
     * @return {string}
     */
	public getDateOfBirth(): Date {
		return this.dateOfBirth;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public setId(value: number) {
		this.id = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public setEmail(value: string) {
		this.email = value;
	}

    /**
     * Setter password
     * @param {string} value
     */
	public setPassword(value: string) {
		this.password = value;
	}

    /**
     * Setter fname
     * @param {string} value
     */
	public setFname(value: string) {
		this.fname = value;
	}

    /**
     * Setter lname
     * @param {string} value
     */
	public setLname(value: string) {
		this.lname = value;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public setAddress(value: string) {
		this.address = value;
	}

    /**
     * Setter dateOfBirth
     * @param {string} value
     */
	public setDateOfBirth(value: Date) {
		this.dateOfBirth = value;
	}

}