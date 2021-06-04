"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let userController = {
    fetchAllUsers: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // try {
        //     const retrieveAllUsers = await fetch(`https://reqres.in/api/users?page=1`).then(response => response.json());
        //     if(retrieveAllUsers) {
        //         return res.status(200).send({ success: true, users: retrieveAllUsers.data });
        //     } 
        // } catch(error: any) {
        //     res.status(400).send(error);
        // }
    }),
    deleteUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // let { id } = req.params;
        // try {
        //     await deleteMethod(id);
        //     return res.status(200).json({ success: true, message: 'Successfully removed user.' });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    }),
    updateUserById: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // let { id } = req.params;
        // let { first_name, last_name, email, avatar } = req.body;
        // try {
        //     await updateMethod(id);
        //     return res.status(200).json({ success: true, user: 'Successfully edited user.' });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    }),
    addNewUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // let { first_name, last_name, email, avatar } = req.body;
        // try {
        //     let storeUser = await addNewUserMethod(id);
        //     return res.status(200).json({ success: true, user: storeUser });
        // } catch(error) {
        //     return res.status(400).json({ success: false, message: error });
        // }
    }),
};
exports.default = userController;
