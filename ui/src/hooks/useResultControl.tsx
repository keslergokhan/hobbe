import { BaseContext } from "../context/baseContext"
import { useContext } from "react"
import { DefaultToastComponentProp } from "../components/toastComponent/defaultToastComponent";

import { Helpers } from "../services/helpersService";



export const useResultControl = () =>{
    const {setToastList,toastList} = useContext(BaseContext);

    const setToastHandler = (x:DefaultToastComponentProp) => {
        x.Key = Helpers.getInstance().randomNumber(1,9000);
        
        setToastList([...toastList,x]);
        if(toastList.length > 5){
            setToastList([]);
        }
    }

    return {setToastHandler}
}