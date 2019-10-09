import { User } from './user';
import { Cookbook } from './cookbook';

export class Recipe {
    private id:number = 0;
    private title:string;
    private instructions:string;
    private shared:boolean;
    private user:User;
    private cookBook:Cookbook;
    
    constructor(id:number, title:string, instructions:string, 
                shared:boolean, user:User, cookBook:Cookbook){
        this.id = id;
        this.title = title;
        this.instructions = instructions;
        this.shared = shared;
        this.user = user;
        this.cookBook = cookBook;
    }


    /**
     * Getter $id
     * @return {number }
     */
	public get $id(): number  {
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
     * Getter $instructions
     * @return {string}
     */
	public get $instructions(): string {
		return this.instructions;
	}

    /**
     * Getter $shared
     * @return {boolean}
     */
	public get $shared(): boolean {
		return this.shared;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Getter $cookBook
     * @return {Cookbook}
     */
	public get $cookBook(): Cookbook {
		return this.cookBook;
	}

    /**
     * Setter $id
     * @param {number } value
     */
	public set $id(value: number ) {
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
     * Setter $instructions
     * @param {string} value
     */
	public set $instructions(value: string) {
		this.instructions = value;
	}

    /**
     * Setter $shared
     * @param {boolean} value
     */
	public set $shared(value: boolean) {
		this.shared = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    /**
     * Setter $cookBook
     * @param {Cookbook} value
     */
	public set $cookBook(value: Cookbook) {
		this.cookBook = value;
	}
    

    
}
