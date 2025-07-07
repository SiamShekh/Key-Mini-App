import { NextFunction, Request, RequestHandler, Response } from "express";

export const CatchAsync = (fx: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => Promise.resolve(fx(req, res, next)).catch(next);
}

const Error_Handler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        res.send({
            code: 400,
            msg: err?.message,
            error: err,
            data: []
        });
    } else {
        res.send({
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

const Utility = {
    NotFound,
    Error_Handler,
    CatchAsync
}

export default Utility;