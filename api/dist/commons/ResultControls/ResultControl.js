"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultControlData = exports.ResultControl = void 0;
class BaseResultControl {
    Success() {
        this.IsSuccess = true;
    }
    ;
    Fail() {
        this.IsSuccess = false;
    }
    FailSetException(error) {
        if (error instanceof Error) {
            this.Error = error;
        }
        else {
            this.Error = new Error("Beklenmedik bir hata oluştu !");
        }
    }
}
class ResultControl extends BaseResultControl {
}
exports.ResultControl = ResultControl;
class ResultControlData extends ResultControl {
    SuccessSetData(t) {
        this.Data = t;
    }
}
exports.ResultControlData = ResultControlData;
