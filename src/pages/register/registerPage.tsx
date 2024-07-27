import './registerPage.css'
import { RegisterComponent } from '../../components/registerComponent/registerComponent' 
import { EmptyLayout } from '../../layouts/emptyLayout'
import { LogoFormLayout } from '../../layouts/logos/logoFormLayout'

export const RegisterPage:React.FC = ()=>{

    return (
        <>
            <EmptyLayout>
                <LogoFormLayout title='Şimdi Kayıt Ol'>
                    <RegisterComponent></RegisterComponent>
                </LogoFormLayout>
            </EmptyLayout>
        </>
    )
}