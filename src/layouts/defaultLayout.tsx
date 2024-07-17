import { ReactChild, ReactNode } from "react"
import { DefaultFooter } from "./footers/defaultFooter"
import { DefaultHeader } from "./headers/defaultHeader"

interface DefaultLayoutProps{
    children:ReactNode
}

/**
 * Varsayılan layout
 * @param props 
 * @returns 
 */
export const DefaultLayout:React.FC<DefaultLayoutProps> = (props:DefaultLayoutProps)=>{
    return (
        <>
            <DefaultHeader></DefaultHeader>
            {props.children}
            <DefaultFooter></DefaultFooter>
        </>
    );
}