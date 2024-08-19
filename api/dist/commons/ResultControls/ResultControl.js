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
        this.Error = error;
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
