import { useField } from "formik";
import { HtmlHTMLAttributes, ReactNode } from "react";




interface DefaultInputProps {
    label: string;
    name:string;
    type:string;
    [x:string]:string | React.MouseEventHandler<HTMLInputElement>;
}



export const DefaultInput:React.FC<DefaultInputProps> = (props:DefaultInputProps) => {
    const [field,meta,helper] = useField(props.name);
    return  (<>
        <label>{props.label}</label><br></br>
        <input {...field} {...props} ></input>
        <br></br>
        <span>{meta.error}</span>
    </>);
}

