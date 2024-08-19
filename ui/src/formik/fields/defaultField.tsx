import { useField } from "formik";
import * as Bootstrap from 'react-bootstrap'



interface DefaultInputProps {
    label: string;
    name:string;
    type:string;
    [x:string]:string | React.MouseEventHandler<HTMLInputElement>;
}



export const DefaultInput:React.FC<DefaultInputProps> = (props:DefaultInputProps) => {
    const [field,meta,helper] = useField(props.name);
    return  (<>
        <Bootstrap.Form.Group>
            <Bootstrap.Form.Label>
                {props.label}
            </Bootstrap.Form.Label>
            <Bootstrap.Form.Control {...field} {...props} ></Bootstrap.Form.Control>
            <Bootstrap.Form.Text className="text-danger">
                {meta.error}
            </Bootstrap.Form.Text>
        </Bootstrap.Form.Group>
    </>);
}

