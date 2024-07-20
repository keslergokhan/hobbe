import React,{ReactNode,useEffect} from "react"
import { DefaultFooter } from "./footers/defaultFooter"
import { DefaultHeader } from "./headers/defaultHeader"
import { BaseContext } from "../context/baseContext"

interface EmptyLayoutProps{
    children:ReactNode
}

/**
 * Varsayılan layout
 * @param props 
 * @returns 
 */
export const EmptyLayout:React.FC<EmptyLayoutProps> = (props:EmptyLayoutProps)=>{


    
    return (
        <>
            {props.children}
        </>
    );
}