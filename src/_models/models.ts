export interface IResponse <T>{
    "status": "success" | string,
    "statusCode": 201 | number,
    "data": T
}

export interface IError{
    error:{
    "status": string,
    "statusCode": number,
    "body": string
    }
}