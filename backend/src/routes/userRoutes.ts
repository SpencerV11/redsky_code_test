import express, { Router } from "express";
import UserController from "../controllers/UserController";

const router: Router = express.Router();

router.get(`/fetchAllUsers`, UserController.fetchAllUsers);
router.delete(`/deleteUser/:id`, UserController.deleteUser);
router.put(`/updateUserById:/id`, UserController.updateUserById);
router.post(`/addNewUser`, UserController.addNewUser);

export default router;
