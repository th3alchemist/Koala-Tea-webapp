import { User } from 'src/app/classes/user';

export class Cookbook{

  id:number;
  title:string;
  description:string;
  shared:boolean;
  user:User;

  constructor(id:number, title:string, description:string, shared:boolean, user:User){
      this.id = id;
      this.title = title;
      this.description = description;
      this.shared = shared;
      this.user = user;
  }

  getId(){return this.id;}
  getTitle(){return this.title;}
  getDescription(){return this.description;}
}
