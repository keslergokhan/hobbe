import React from "react";
import { LoginComponent } from "../../components/loginComponent/loginComponent";
import { LogoFormLayout } from "../../layouts/logos/logoFormLayout";
import './loginPage.css';


export const LoginPage:React.FC = () => {
    
    return (<>
        <LogoFormLayout title="Şimdi Giriş Yap">
            <LoginComponent></LoginComponent>
        </LogoFormLayout>
    </>)
}