import constant from './constant'

class ResponseBuilder {
  resObject = {
    status: null,
    status_code: null,
    message: null 
  }
   
  getResponseObj = (statusCode, message, data) => {
    this.resObject = {statusCode, message }
    if (data) {
      this.resObject.data = data
    }
    
    return this.resObject
  }
  success = (res,message = 'OK', data = []) => {
    const {SUCCESS} = constant.httpStatusCode
    res.status(SUCCESS).send(this.getResponseObj(SUCCESS,message,data))
  }
  created = (res, message = '',data = []) => {
    const {CREATED} = constant.httpStatusCode
    res.status(CREATED).send(this.getResponseObj(CREATED,message,data))
  }
  accepted = (res,message = '',data = []) => {
    const {ACCEPTED} = constant.httpStatusCode
    res.status(ACCEPTED).send(this.getResponseObj(ACCEPTED,message,data))
  }
  badRequest = (res,message = '',data = []) => {
    const {BAD_REQUEST} = constant.httpStatusCode
    res.status(BAD_REQUEST).send(this.getResponseObj(BAD_REQUEST,message,data))
  }
  // Failure response
  notFound = (res, message = '',data = []) => {
    const {NOT_FOUND} = constant.httpStatusCode
    res.status(NOT_FOUND).send(this.getResponseObj(NOT_FOUND,message,data))
  }
  internalServerError = (res, message = '',data = []) => {
    const {INTERNAL_SERVER_ERROR} = constant.httpStatusCode
    res.status(INTERNAL_SERVER_ERROR).send(this.getResponseObj(INTERNAL_SERVER_ERROR,message,data))
  } 
  serviceUnavailable = (res, message = '',data = []) => {
    const {SERVICE_UNAVAILABLE} = constant.httpStatusCode
    res.status(SERVICE_UNAVAILABLE).send(this.getResponseObj(SERVICE_UNAVAILABLE,message,data))
  } 
}

export default new ResponseBuilder()