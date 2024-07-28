import React from "react";
import { DefaultToastComponentProp } from "../components/toastComponent/defaultToastComponent";
import { UserCredential } from "firebase/auth";

interface BaseContextProps {
    setToastList:(item:DefaultToastComponentProp[])=>void | undefined;
    toastList:DefaultToastComponentProp[];
    user:UserCredential | null
}

const BaseContextPropsData:BaseContextProps = {
    setToastList : (item:DefaultToastComponentProp[])=>{},
    toastList : [],
    user : null
}

export const BaseContext = React.createContext<BaseContextProps>(BaseContextPropsData);

