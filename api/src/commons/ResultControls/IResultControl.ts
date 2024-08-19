
export interface IResultControl{
    IsSuccess:boolean;
    Error:Error;
    Success():void;
    Fail():void;
    FailSetException(error:Error):void
}

export interface IResultDataControl<T> extends IResultControl{
    Data:T;
    SuccessSetData(t:T):void;
}

