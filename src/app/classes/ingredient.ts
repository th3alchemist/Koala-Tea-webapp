import { Unit } from './unit';
import { Recipe } from './recipe';

export class Ingredient {

    id:number = 0;
    name:string;
    amount:number;
    recipe:Recipe;
    unit:Unit;

    constructor(id:number, name:string, amount:number, recipe:Recipe, unit:Unit){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.unit = unit;
        this.recipe = recipe;
    }


    /**
     * Getter $id
     * @return {number }
     */
	public get $id(): number  {
		return this.id;
	}

    /**
     * Getter $amount
     * @return {number}
     */
	public get $amount(): number {
		return this.amount;
	}


    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}


    /**
     * Getter $recipe
     * @return {Recipe}
     */
	public get $recipe(): Recipe {
		return this.recipe;
	}

    /**
     * Getter $unit
     * @return {Unit}
     */
	public get $unit(): Unit {
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
     * Setter $amount
     * @param {number} value
     */
	public set $amount(value: number) {
		this.amount = value;
	}

    /**
     * Setter $recipe
     * @param {Recipe} value
     */
	public set $recipe(value: Recipe) {
		this.recipe = value;
	}

    /**
     * Setter $unit
     * @param {Unit} value
     */
	public set $unit(value: Unit) {
		this.unit = value;
	}
    
}
