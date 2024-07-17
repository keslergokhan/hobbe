import { DefaultInput } from '../../formik/fields/defaultField'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
 

export const RegisterComponent:React.FC = ()=>{

    const initialValues = {
        surname:""
    }

    const onSubmitHandler = ()=>{
        console.log("başarılı");
    }

    const validationSchema = Yup.object({
        surname:Yup.string().required("Bu alan zorunludur")
    });
    
    return (
        <>

            <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={validationSchema}>
                <Form>
                    <DefaultInput label='sdf' type="text" name="surname" data-ff="gokhan" ></DefaultInput>
                    <button type='submit'>Gönder</button>
                </Form>
            </Formik>
        </>
    )
}