import { User } from 'src/app/classes/user';

export class Cookbook{

  public id:number;
  public title:string;
  public description:string;
  public shared:boolean;
  public user:User;

  constructor(id:number, title:string, description:string, shared:boolean, user:User){
      this.id = id;
      this.title = title;
      this.description = description;
      this.shared = shared;
      this.user = user;
  }

  public getId(id:number){return this.id;}
}