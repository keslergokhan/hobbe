import { BaseContext } from "../context/baseContext"
import { useContext, useEffect } from "react"
import {auth} from '../configs/firebase'
import {onAuthStateChanged,User} from 'firebase/auth'
import { useNavigate } from "react-router-dom"


export const useLoginControl = ():void => {
    const baseContext = useContext(BaseContext);
    const navigate = useNavigate();

    useEffect(()=>{
        
        onAuthStateChanged(auth,(currentUser)=>{

            if(currentUser){
               navigate("/home");
            }
            
        });

    },[]);
    

}