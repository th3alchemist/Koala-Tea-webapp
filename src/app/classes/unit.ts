export class Unit {
    constructor(id:number, unit:string){
        this.id = id;
        this.unit = unit;
    }

    private id:number = 0;
    private unit:string;


    /**
     * Getter $id
     * @return {number }
     */
	public get $id(): number  {
		return this.id;
	}

    /**
     * Getter $unit
     * @return {string}
     */
	public get $unit(): string {
		return this.unit;
	}

    /**
     * Setter $id
     * @param {number } value
     */
	public set $id(value: number ) {
		this.id = value;
	}

    /**
     * Setter $unit
     * @param {string} value
     */
	public set $unit(value: string) {
		this.unit = value;
	}

}
