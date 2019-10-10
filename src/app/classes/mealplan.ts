import { User } from './user';

export class Mealplan {

    id:number;
    day:string;
    user:User;

    constructor(id:number, day:string, user:User){
        this.id = id;
        this.day = day;
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
     * Getter $day
     * @return {string}
     */
	public get $day(): string {
		return this.day;
	}

    /**
     * Getter $user
     * @return {User}
     */
	public get $user(): User {
		return this.user;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $day
     * @param {string} value
     */
	public set $day(value: string) {
		this.day = value;
	}

    /**
     * Setter $user
     * @param {User} value
     */
	public set $user(value: User) {
		this.user = value;
	}


}
