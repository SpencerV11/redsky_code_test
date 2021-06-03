import { Request, Response, NextFunction } from "express";

let userController = {
    fetchAllUsers: async (req: Request, res: Response, next: NextFunction) => {
        // try {
        //     const retrieveAllUsers = await fetch(`https://reqres.in/api/users?page=1`).then(response => response.json());
        //     if(retrieveAllUsers) {
        //         return res.status(200).send({ success: true, users: retrieveAllUsers.data });
        //     } 
        // } catch(error: any) {
        //     res.status(400).send(error);
        // }
    },
    deleteUser: async (req: Request, res: Response, next: NextFunction) => {
        // let { id } = req.params;
        // try {
        //     await deleteMethod(id);
        //     return res.status(200).json({ success: true, message: 'Successfully removed user.' });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    },

    updateUserById: async (req: Request, res: Response, next: NextFunction) => {
        // let { id } = req.params;
        // let { first_name, last_name, email, avatar } = req.body;
        // try {
        //     await updateMethod(id);
        //     return res.status(200).json({ success: true, user: 'Successfully edited user.' });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    },

    addNewUser: async (req: Request, res: Response, next: NextFunction) => {
        // let { first_name, last_name, email, avatar } = req.body;
        // try {
        //     let storeUser = await addNewUserMethod(id);
        //     return res.status(200).json({ success: true, user: storeUser });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    },

}

export default userController;

