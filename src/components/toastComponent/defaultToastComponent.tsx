import { useState } from "react";
import { Toast } from "react-bootstrap";
import './defaultToastComponent.css'

export enum ToastType{
    primary,
    secondary,
    success,
    danger,
    warning,
    info,
    light,
    dark,
}
export interface DefaultToastComponentProp {
    title:string;
    message:string;
    type:ToastType;
    key?:number;
}

export const DefaultToastComponent = (props:DefaultToastComponentProp)=>{
    const [state, setShow] = useState(true);
  
    setTimeout(() => {
        setShow(false);
    }, 2500);

    return (
        <>
            <Toast  show={state} onClose={()=>{setShow(false)}} className="default-toast" bg={ToastType[props.type]}>
                <Toast.Header>
                    <strong className="me-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.title}</Toast.Body>
            </Toast>
        </>
    );
}