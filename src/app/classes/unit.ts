export class Unit {
    constructor(id:number, unit:string){
        this.id = id;
        this.unit = unit;
    }

    id:number = 0;
    unit:string;


    /**
     * Getterid
     * @return {number }
     */
	public getid(): number  {
		return this.id;
	}

    /**
     * Getterunit
     * @return {string}
     */
	public getunit(): string {
		return this.unit;
	}

    /**
     * Setterid
     * @param {number } value
     */
	public setid(value: number ) {
		this.id = value;
	}

    /**
     * Setterunit
     * @param {string} value
     */
	public setunit(value: string) {
		this.unit = value;
	}

}
