export class User {

    private id:number;
    private email:string;
    private password:string;
    private fname:string;
    private lname:string;
    private address:string;
    private dateOfBirth:string;

	constructor($id: number, $email: string, $password: string, $fname: string, $lname: string, $address: string, $dateOfBirth: string) {
		this.id = $id;
		this.email = $email;
		this.password = $password;
		this.fname = $fname;
		this.lname = $lname;
		this.address = $address;
		this.dateOfBirth = $dateOfBirth;
	}
    

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
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

    /**
     * Getter $dateOfBirth
     * @return {string}
     */
	public get $dateOfBirth(): string {
		return this.dateOfBirth;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $email
     * @param {string} value
     */
	public set $email(value: string) {
		this.email = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $fname
     * @param {string} value
     */
	public set $fname(value: string) {
		this.fname = value;
	}

    /**
     * Setter $lname
     * @param {string} value
     */
	public set $lname(value: string) {
		this.lname = value;
	}

    /**
     * Setter $address
     * @param {string} value
     */
	public set $address(value: string) {
		this.address = value;
	}

    /**
     * Setter $dateOfBirth
     * @param {string} value
     */
	public set $dateOfBirth(value: string) {
		this.dateOfBirth = value;
	}
}
