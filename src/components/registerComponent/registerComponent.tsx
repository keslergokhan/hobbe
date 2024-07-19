import React from 'react'
import { DefaultInput } from '../../formik/fields/defaultField'
import {Formik,Form} from 'formik'
import * as Bootstrap from 'react-bootstrap'
import * as Yup from 'yup'
import './registerComponent.css'
import { FormConstantMesage } from '../../formik/constantMessage'
import { AuthService } from '../../services/authService'
import { useResultControl } from '../../hooks/useResultControl'
import { ToastType } from '../toastComponent/defaultToastComponent'

export const RegisterComponent:React.FC = ()=>{

    const [setToastHandler] = useResultControl();
    const authService = new AuthService();

    const initialValues = {
        name:"",
        surname:"",
        email:"",
        phone:"",
        password:"",
        passwordAgain:""
    };

    

    const validationSchema = Yup.object({
        name:Yup.string().required(FormConstantMesage.required()).min(3,FormConstantMesage.min(3)),
        surname:Yup.string().required(FormConstantMesage.required()).min(3,FormConstantMesage.min(3)),
        email:Yup.string().required(FormConstantMesage.required()).email(FormConstantMesage.email()),
        phone:Yup.string().matches(FormConstantMesage.matches0_9(), FormConstantMesage.matches0_9Message()).required(FormConstantMesage.required()).min(9,FormConstantMesage.min(9)),
        password:Yup.string().required(FormConstantMesage.required()).min(6,FormConstantMesage.min(6)),
        passwordAgain:Yup.string().required(FormConstantMesage.required()).min(6,FormConstantMesage.min(6))
        .oneOf([Yup.ref("password")],FormConstantMesage.passwordError())
    });

    const onSubmitHandler = async (value:any)=>{
        setToastHandler({title : value.name,message : "test",type:ToastType.secondary});
    }
    
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={validationSchema}>
                <Form>
                    <Bootstrap.Row>
                        <Bootstrap.Col>
                            <DefaultInput id="name" label="Ad" type="text" name="name" placeholder="Adınız" ></DefaultInput>
                        </Bootstrap.Col>
                        <Bootstrap.Col>
                            <DefaultInput id="surname" label="Soyad" type="text" name="surname" placeholder="Soyadınız"></DefaultInput>
                        </Bootstrap.Col>
                    </Bootstrap.Row>

                    <Bootstrap.Row>
                        <DefaultInput id="email" label="Email" type="email" name="email" placeholder="Email adresiniz"></DefaultInput>
                    </Bootstrap.Row>

                    <Bootstrap.Row>
                        <DefaultInput id="phone" label="Phone" type="text" name="phone" placeholder="Telefon adresiniz"></DefaultInput>
                    </Bootstrap.Row>

                    <Bootstrap.Row>
                        <DefaultInput id="password" label="Şifre" type="password" name="password" placeholder="Şifreniz"></DefaultInput>
                    </Bootstrap.Row>

                    <Bootstrap.Row>
                        <DefaultInput id="passwordAgain" label="Şifre Tekrar" type="password" name="passwordAgain" placeholder="Şifre Tekrar"></DefaultInput>
                    </Bootstrap.Row>   

                    <Bootstrap.Button type='submit' className='mt-3'>Gönder</Bootstrap.Button>
                </Form>
            </Formik>
        </>
    )
}