import { auth } from "../configs/firebase";
import {createUserWithEmailAndPassword, UserCredential} from 'firebase/auth';
import * as Result from "./resultControl";

export class AuthService{

    /**
     * Firebase kullanıcı oluşturma
     * @param email 
     * @param password 
     * @returns 
     */
    async createUserAsync(email:string,password:string):Promise<Result.IResultControlData<UserCredential>>{
        
        const result = new Result.ResultControlData<UserCredential>();

        try{
            await createUserWithEmailAndPassword(auth,email,password).then(x=>{
                if(x.user == undefined ||x.user == null){
                    throw new Error("kayıt işleminde beklenmedik bir problem yaşandı !");
                }

                result.setSucessData(x);
            }).catch(x=>{
                result.setFailError(x);
            });
        }catch(error:any){
            result.setFailError(error);
        }
        

        return result;
    }
}