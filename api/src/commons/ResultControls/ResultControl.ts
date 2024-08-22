import { IResultControl,IResultDataControl } from "./IResultControl";


abstract class BaseResultControl implements IResultControl
{
    IsSuccess:boolean;
    Error:Error;

    Success():void
    {
        this.IsSuccess = true;
    };
    Fail():void{
        this.IsSuccess = false
    }
    FailSetException(error:any):void{
        if(error instanceof Error){
            this.Error = error;
        }else{
            this.Error = new Error("Beklenmedik bir hata oluştu !");
        }
        
    }

}

export class ResultControl 
extends BaseResultControl
implements IResultControl
{

}

export class ResultControlData<T> 
extends ResultControl
implements IResultDataControl<T>
{
    Data:T;
    SuccessSetData(t:T):void{
        this.Data = t;
    }
    
}