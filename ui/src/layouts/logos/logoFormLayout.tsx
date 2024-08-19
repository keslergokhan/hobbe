import { ReactNode } from "react"
import './logoFormLayout.css'

interface DefaultLayoutProps{
    children:ReactNode,
    title:string
}

export const LogoFormLayout:React.FC<DefaultLayoutProps> = (props:DefaultLayoutProps) =>{
    return (
        <>
            <section className='logo-form-section'>
                <div className='logo-form-title'>
                    <h1>Hobbe</h1>
                    <h2>{props.title}</h2>
                </div>
                <div className="logo-form">
                    {props.children}
                </div>
            </section>
        </>
    );
}