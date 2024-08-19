import { useEffect } from 'react';
import {auth} from '../configs/firebase'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { LocalStorageHelpers } from '../services/helpersService';

export const useLogaut = async ():Promise<void> =>{
    const navigate = useNavigate();
    await signOut(auth);
    
    LocalStorageHelpers.getInstance().remove("user");
    navigate("/login");
}