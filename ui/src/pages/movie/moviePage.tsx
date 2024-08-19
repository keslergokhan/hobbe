import { AddMovieComponent } from "../../components/movieComponent/addMovieComponent";
import { DefaultLayout } from "../../layouts/defaultLayout";

export const MoviePage:React.FC = () =>{
    return (
        <>
            <DefaultLayout>
                <AddMovieComponent></AddMovieComponent>  
            </DefaultLayout>
        </>
    );
}