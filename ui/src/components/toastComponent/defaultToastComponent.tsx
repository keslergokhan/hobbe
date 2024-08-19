import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import './defaultToastComponent.css'


export interface DefaultToastComponentProp {
    Title:string;
    Message:string;
    IsSuccess:boolean;
    Key?:number;
}

export const DefaultToastComponent : React.FC<DefaultToastComponentProp> = (props:DefaultToastComponentProp)=>{
    const [state, setShow] = useState(true);
    setTimeout(() => {
        setShow(false);
    }, 2800);

    return (
        <>
            <Toast key={props.Key} className="default-toast" show={state} onClose={()=>{setShow(false)}} bg={props.IsSuccess ? "primary":"danger"}>
                <Toast.Header>
                    <strong className="me-auto">{props.Title}</strong>
                </Toast.Header>
                <Toast.Body>{props.Message}</Toast.Body>
            </Toast>
        </>
    );
}