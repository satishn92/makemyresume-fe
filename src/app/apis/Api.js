import request from "superagent";
import { ModelRangesEndPoint, SegmentsEndPoint } from "constants/Endpoints";

function handleResponse(error, response, successCallback,  failureCallback) {
  if (error) {
    failureCallback(error);
  } else {
    successCallback(response.body);
  }
}

class api {
  
}

export default new api();
