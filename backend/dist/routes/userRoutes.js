"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
router.get(`/fetchAllUsers`, UserController_1.default.fetchAllUsers);
router.delete(`/deleteUser/:id`, UserController_1.default.deleteUser);
router.put(`/updateUserById:/id`, UserController_1.default.updateUserById);
router.post(`/addNewUser`, UserController_1.default.addNewUser);
exports.default = router;
