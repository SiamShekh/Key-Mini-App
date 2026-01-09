import { NextFunction, Request, RequestHandler, Response } from "express";
import SmartError from "./SmartError";

export const CatchAsync = (fx: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => Promise.resolve(fx(req, res, next)).catch(next);
}

const Error_Handler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof SmartError) {
        res.status(err.statusCode).send(err);
    } else if (err instanceof Error) {
        res.status(400).send({
            code: 400,
            msg: err?.message,
            error: err,
            data: []
        });
    } else {
        res.status(400).send({
            code: 400,
            msg: 'Something went wrong',
            error: err,
            data: []
        });
    }
};

const NotFound = (req: Request, res: Response, next: NextFunction) => {
    res.send({
        code: 200,
        msg: "path not found",
        path: req?.path,
        data: []
    });
};

export const SuccessMessage = (msg: string, data: any, code?: number) => {
    return {
        msg,
        code: code || 200,
        data
    }
}

const Utility = {
    NotFound,
    Error_Handler,
    CatchAsync,
    SuccessMessage
}

export default Utility;