import { DefaultToastComponent, DefaultToastComponentProp } from "./defaultToastComponent"
import { BaseContext } from "../../context/baseContext"
import { useContext } from "react"
import { useEffect,useRef } from "react";


export const ToastListComponent = ()=>{

    const {toastList,setToastList} = useContext(BaseContext);
    const refItem = useRef();

    useEffect(()=>{
        
        console.log(toastList);
        
    },[toastList])

    return (<>
        {
            toastList.map(
            x=>(<DefaultToastComponent key={x.key} title={x.title} message={x.message} type={x.type}
            ></DefaultToastComponent>))
        }
    </>)
}