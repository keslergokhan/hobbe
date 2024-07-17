import { auth } from "../configs/firebase";
import {createUserWithEmailAndPassword, UserCredential} from 'firebase/auth';
import * as Result from "./resultControl";

export class AuthService{

    /**
     * Kullanıcı oluşturma
     * @param email 
     * @param password 
     * @returns 
     */
    async createUserAsync(email:string,password:string):Promise<Result.IResultControlData<UserCredential>>{
        
        const a = createUserWithEmailAndPassword(auth,"","");
        const result = new Result.ResultControlData<any>();
        

        return result;
    }
}