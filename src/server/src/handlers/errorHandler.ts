import { NextFunction, Request, Response } from 'express';

import type { Middleware } from 'types/middleware';

export const errorHandler =
    (middleware: Middleware) =>
    (req: Request, res: Response, next: NextFunction) => {
        return middleware(req, res, next).catch((error: Error) => {
            return res.status(400).send({
                success: false,
                result: null,
                message: error.message,
                controller: middleware.name,
                error: error,
            });
        });
    };
