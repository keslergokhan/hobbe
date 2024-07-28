import { auth } from "../configs/firebase";
import {createUserWithEmailAndPassword, UserCredential,signInWithEmailAndPassword} from 'firebase/auth';
import * as Result from "./resultControl";

export class AuthService{

    /**
     * Firebase kullanıcı giriş işlemi
     * @param email 
     * @param password 
     * @returns 
     */
    async signInUserAsync(email:string,password:string):Promise<Result.IResultControlData<UserCredential>>{
        const result = new Result.ResultControlData<UserCredential>();

        try{
            
            const signResult = await signInWithEmailAndPassword(auth,email,password)
            .then((x:UserCredential)=>{
                result.setSucessData(x);
            }).catch(x=>{
                result.setFailError(x);
            });

        }catch(error:any){
            result.setFailError(error);
        }

        return result;
    }

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