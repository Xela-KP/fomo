import { NextFunction, Request, Response } from 'express';

export const catchError = (middleware: Function) => {
    return async (req: Request, res: Response, next: NextFunction) =>
        await middleware(req, res, next).catch((error: Error) =>
            res.status(400).send({
                success: false,
                result: null,
                message: error.message || 'Required fields are not supplied',
                controller: middleware.name,
                error: error,
            })
        );
};
