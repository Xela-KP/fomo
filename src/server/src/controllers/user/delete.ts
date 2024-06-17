import { Request, RequestHandler, Response } from 'express';

import UserModel from '../../models/user.model.js';

const deleteUser: RequestHandler<
    { requesterId: string },
    {},
    { requestedId: string }
> = async (req: Request, res: Response) => {
    await UserModel.findByIdAndDelete(req.body.requestedId);
    return res.status(200).send({
        success: true,
        message: 'Successfully Created new User',
    });
};

export default deleteUser;
