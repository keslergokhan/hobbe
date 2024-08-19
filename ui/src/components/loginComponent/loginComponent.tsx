import React from "react";
import {Formik,Form} from 'formik'
import { LoginInModel } from "../../models/loginInModel";
import { DefaultInput } from "../../formik/fields/defaultField";
import * as Bootstrap from 'react-bootstrap';
import { FormConstantMesage } from "../../formik/constantMessage";
import * as Yup from 'yup'
import './loginComponent.css'
import { useLoginControl } from "../../hooks/useLoginControl";
import { AuthService } from "../../services/authService";
import { useResultControl } from "../../hooks/useResultControl";

export const LoginComponent: React.FC = () => {
    useLoginControl();
    const authService = new AuthService();
    
    const {setToastHandler} = useResultControl();

    const validationSchema = Yup.object({
        email:Yup.string().required(FormConstantMesage.required()).email(FormConstantMesage.email()),
        password:Yup.string().required(FormConstantMesage.required()).min(6,FormConstantMesage.min(6)),
    });

    const initialValues:LoginInModel = {
        email:"",
        password:""
    }

    const onSubmitHandler = async (values:LoginInModel) =>{
        const signResult = await authService.signInUserAsync(values.email,values.password);

        if(signResult.IsSuccess){
            setToastHandler({IsSuccess:true,Title:"Tebrikler",Message:`Aramıza hoş geldiniz.`});
            
        }else{
            setToastHandler({IsSuccess:false,Title:"Dikkat !",Message:`Teknik bir problem yaşandı !`});
        }

    }

    return (
        <>
            <div className="login-form">
                <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={validationSchema} >
                    <Form>
                        <Bootstrap.Row>
                            <DefaultInput id="email" name="email" label="E-posta" type="email" ></DefaultInput>
                        </Bootstrap.Row>
                        
                        <Bootstrap.Row>
                            <DefaultInput id="password" name="password" label="Şifre" type="password"></DefaultInput>
                        </Bootstrap.Row>
                        <Bootstrap.Button type='submit' className='mt-3'>Gönder</Bootstrap.Button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}