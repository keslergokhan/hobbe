import './registerPage.css'
import { RegisterComponent } from '../../components/registerComponent/registerComponent' 
import { EmptyLayout } from '../../layouts/emptyLayout'

export const RegisterPage:React.FC = ()=>{

    return (
        <>
            <EmptyLayout>
                <div id='aaa'></div>
                <section className='register-section'>
                    <div className='register-form-title'>
                        <h1>Hobbe</h1>
                        <h2>Şimdi Kayıt Ol</h2>
                    </div>
                    <RegisterComponent></RegisterComponent>
                </section>
            </EmptyLayout>
        </>
    )
}