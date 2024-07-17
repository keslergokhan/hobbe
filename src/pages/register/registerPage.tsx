import './registerPage.css'
import { RegisterComponent } from '../../components/registerComponent/registerComponent' 

export const RegisterPage:React.FC = ()=>{

    return (
        <>
            <section className='register-section'>
                <div className='register-form-title'>
                    <h1>Hobbe</h1>
                    <h2>Şimdi Kayıt Ol</h2>
                </div>
                <RegisterComponent></RegisterComponent>
            </section>
            
        </>
    )
}