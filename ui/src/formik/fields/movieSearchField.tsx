import { useField } from "formik";
import { useState } from "react";
import * as Bootstrap from 'react-bootstrap'

export const MovieSearchField:React.FC = () => {

    const [field,meta,helper] = useField("movieName");

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        helper.setValue(e.target.value);
    } 

    return  (<>
        <Bootstrap.Form.Group>
            <Bootstrap.Form.Label>
                Film Adı
            </Bootstrap.Form.Label>
            <Bootstrap.Form.Control name="movieName" onChange={onChangeHandler} ></Bootstrap.Form.Control>
            <Bootstrap.Form.Text className="text-danger">
                {meta.error}
            </Bootstrap.Form.Text>
        </Bootstrap.Form.Group>
    </>);
}

