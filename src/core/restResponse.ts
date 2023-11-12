import { ErrorCodes } from "../core";

export interface IRestResponse<T> {
    data: T;
    error: IRestResponseError[];
    validation: IValidation[];
}

export interface IRestResponseError {
    code: ErrorCodes;
    message: string;
}

export interface IValidation {
    [key: string]: string[]
}