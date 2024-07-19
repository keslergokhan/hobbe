import { BaseEntity } from "./baseEntity";

export class userEntity extends BaseEntity{
    name:string;
    surname:string;
    email:string;
    phone:string;
    password:string;
}