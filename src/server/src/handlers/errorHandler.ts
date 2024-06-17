import { NextFunction, Request, Response } from 'express';

import type { Middleware } from 'types/middleware';

export const catchError =
    (middleware: Middleware): Middleware =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = middleware(req, res, next);
            if (result instanceof Promise) {
                await result;
            }
            return next();
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send({
                    success: false,
                    result: null,
                    message: 'Required fields are not supplied',
                    controller: middleware.name,
                    error: error,
                });
            }
            return next();
        }
    };
