import React, { useRef, useState } from "react";
import * as Bootstrap from 'react-bootstrap'
import './addMovieComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormConstantMesage } from "../../formik/constantMessage";
import { MovieSearchField } from "../../formik/fields/movieSearchField";

export const AddMovieComponent:React.FC = ()=>{

    const cardBodyRef = useRef<HTMLDivElement>(null);

    const addMovieHandler = () => {
        if(cardBodyRef.current){
            const movieBodyActiveClassName = "add-movie-component__body--active";
            console.log(Array.from(cardBodyRef.current.classList).indexOf(movieBodyActiveClassName) !== -1);
            
            if(Array.from(cardBodyRef.current.classList).indexOf(movieBodyActiveClassName) !== -1){
                cardBodyRef.current.classList.remove(movieBodyActiveClassName);
            }else{
                cardBodyRef.current.classList.add(movieBodyActiveClassName);
            }
        }
    }

    const initialValues = {
        movieName:"",
    }

    const onSubmitHandler = (e:any)=>{
        
    }

    const validationSchema = Yup.object({
        movieName:Yup.string().required(FormConstantMesage.required)
    })

    return (
        <>
            <div className="add-movie-component" >
                <Bootstrap.Container className="mt-5">
                    <Bootstrap.Card className="bg-transparent border-0">
                        <Bootstrap.CardHeader className="bg-transparent border-0 text-end">
                            <Bootstrap.Button onClick={addMovieHandler}>Yeni Ekle <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Bootstrap.Button>
                        </Bootstrap.CardHeader>
                        <Bootstrap.CardBody className="add-movie-component__body" ref={cardBodyRef}>
                            <div className="add-movie-component__body__form">
                                <Formik validationSchema={validationSchema} onSubmit={onSubmitHandler} initialValues={initialValues} >
                                    <Form>
                                        <MovieSearchField></MovieSearchField>
                                        <div className="d-flex justify-content-end">
                                            <Bootstrap.Button className="mt-2 " type="submit" >Gönder</Bootstrap.Button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </Bootstrap.CardBody>
                    </Bootstrap.Card>
                </Bootstrap.Container>
            </div>
            
        </>
             
    );
}