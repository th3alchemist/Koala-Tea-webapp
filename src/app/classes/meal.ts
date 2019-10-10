import { Mealplan } from './mealplan';

export class Meal {
    
    private id:number;
    private title: string;
    private course: string;
    private time:string;
    private mealPlan:Mealplan;

    constructor(id:number, title:string, course:string, time:string, mealPlan:Mealplan){
        this.id = id;
        this.title = title;
        this.course = course;
        this.time = time;
        this.mealPlan = mealPlan;
    }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $course
     * @return {string}
     */
	public get $course(): string {
		return this.course;
	}

    /**
     * Getter $time
     * @return {string}
     */
	public get $time(): string {
		return this.time;
	}

    /**
     * Getter $mealPlan
     * @return {Mealplan}
     */
	public get $mealPlan(): Mealplan {
		return this.mealPlan;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $course
     * @param {string} value
     */
	public set $course(value: string) {
		this.course = value;
	}

    /**
     * Setter $time
     * @param {string} value
     */
	public set $time(value: string) {
		this.time = value;
	}

    /**
     * Setter $mealPlan
     * @param {Mealplan} value
     */
	public set $mealPlan(value: Mealplan) {
		this.mealPlan = value;
	}

}
