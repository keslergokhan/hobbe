import { DefaultToastComponent, DefaultToastComponentProp } from "./defaultToastComponent"
import { BaseContext } from "../../context/baseContext"
import { useContext } from "react"


export const ToastListComponent = ():JSX.Element=>{

    const {toastList} = useContext(BaseContext);
    return (<>
        <div className="list-toast">
            {
                toastList.map(x=>(<DefaultToastComponent key={x.Key} IsSuccess={x.IsSuccess} Key={x.Key} Title={x.Title} Message={x.Message} ></DefaultToastComponent>))
            }
        </div>
    </>)
}