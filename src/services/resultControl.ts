

export interface IResultControl{
    IsSuccess:boolean;
    Error:unknown;

    setSucess():ResultControl
    setFail():ResultControl
    setFailError(error:unknown):ResultControl
}

export interface IResultControlData<T> extends IResultControl
{
    Data:T
    setSucessData(data:T):IResultControlData<T>
}

export abstract class BaseResultControl implements IResultControl{
    IsSuccess:boolean;
    Error: unknown;

    setSucess():ResultControl
    {
        this.IsSuccess = true;
        return this;
    }

    setFail():ResultControl{
        this.IsSuccess = false;
        return this;
    }
    
    setFailError(error:unknown):ResultControl{
        this.setFail();
        this.Error = error;
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
    Data:T
    setSucessData(data:T):IResultControlData<T>{
        this.IsSuccess = true;
        this.Data = data;
        return this;
    }
    
}


