import { BaseContext } from "../context/baseContext"
import { useContext } from "react"
import { DefaultToastComponentProp } from "../components/toastComponent/defaultToastComponent";

import { Helpers } from "../services/helpersService";


export const useResultControl = () =>{
    const {setToastList,toastList} = useContext(BaseContext);

    const setToastHandler = (x:DefaultToastComponentProp) => {
        x.key = Helpers.getInstance().randomNumber(1,500);
        setToastList([...toastList.filter(i=>i.title != x.title && i.message!=x.message),x]);
    }

   
    
    

    return [setToastHandler]
}