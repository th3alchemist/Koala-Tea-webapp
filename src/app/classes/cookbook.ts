import { User } from 'src/app/classes/user';
export class Cookbook{
    
    private id:number=0;
    private title:string;
    private description:string;
    private shared:boolean;
    private user:User;

    constructor(id:number, title:string, description:string, shared:boolean, user:User){
        this.id = id;
        this.title = title;
        this.description = description;
        this.shared = shared;
        this.user = user;
    }
    

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}
    

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}


    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Getter $shared
     * @return {boolean}
     */
	public get $shared(): boolean {
		return this.shared;
	}

    /**
     * Setter $shared
     * @param {boolean} value
     */
	public set $shared(value: boolean) {
		this.shared = value;
	}


    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}

    
    
}