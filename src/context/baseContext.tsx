import React from "react";
import { DefaultToastComponentProp } from "../components/toastComponent/defaultToastComponent";

interface BaseContextProps {
    setToastList:(item:DefaultToastComponentProp[])=>void | undefined;
    toastList:DefaultToastComponentProp[];
}

const BaseContextPropsData:BaseContextProps = {
    setToastList : (item:DefaultToastComponentProp[])=>{},
    toastList : []
}

export const BaseContext = React.createContext<BaseContextProps>(BaseContextPropsData);

