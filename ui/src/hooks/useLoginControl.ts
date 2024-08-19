import { BaseContext } from "../context/baseContext"
import { useContext, useEffect } from "react"
import {auth} from '../configs/firebase'
import {onAuthStateChanged,User} from 'firebase/auth'
import { useNavigate,useLocation } from "react-router-dom"

/**
 * Kullanıcının oturumunu kontrol eder.
 * Oturumu kapalı olan kullanıcıları login sayfasına yönlendirir.
 */
export const useLoginControl = ():void => {
    const baseContext = useContext(BaseContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(()=>{
        
        const notAuth = ["/register","/login"]
        onAuthStateChanged(auth,(currentUser)=>{

            if(currentUser){
                if(location.pathname == "/login" || location.pathname == "/register"){
                    navigate("/home");
                }
            }else{
                if(notAuth.indexOf(location.pathname) == -1){
                    navigate("/login");
                }
            }
            
        });

    },[]);
    

}