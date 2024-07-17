

export interface IResultControl{
    isSuccess:boolean;

    setSucess():ResultControl

    setFail():ResultControl
}

export interface IResultControlData<T> extends IResultControl
{
    data:T
    setSucess():IResultControlData<T>

    setFail():IResultControlData<T>
}

export abstract class BaseResultControl implements IResultControl{
    isSuccess:boolean;

    setSucess():ResultControl
    {
        this.isSuccess = true;
        return this;
    }

    setFail():ResultControl{
        this.isSuccess = false;
        return this;
    }
}


export class ResultControl 
extends BaseResultControl
implements IResultControl
{
    
}

export class ResultControlData<T>
extends BaseResultControl
implements IResultControlData<T>

{
    data:T

    setSucess():IResultControlData<T>
    {
        this.isSuccess = true;
        return this;
    }

    setFail():IResultControlData<T>
    {
        this.isSuccess = false;
        return this;
    }
}
