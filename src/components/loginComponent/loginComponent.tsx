import React from "react";
import {Formik,Form} from 'formik'
import { LoginInModel } from "../../Models/loginInModel";
import { DefaultInput } from "../../formik/fields/defaultField";
import * as Bootstrap from 'react-bootstrap';
import { FormConstantMesage } from "../../formik/constantMessage";
import * as Yup from 'yup'
import './loginComponent.css'

export const LoginComponent: React.FC = () => {

    const validationSchema = Yup.object({
        email:Yup.string().required(FormConstantMesage.required()).email(FormConstantMesage.email()),
        password:Yup.string().required(FormConstantMesage.required()).min(6,FormConstantMesage.min(6)),
    });

    const initialValues:LoginInModel = {
        email:"",
        password:""
    }

    const onSubmitHandler = async (values:LoginInModel) =>{
        console.log(values);
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