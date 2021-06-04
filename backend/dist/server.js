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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
let userArr = [];
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(cors_1.default());
app.get("/fetchAllUsers", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (userArr.length > 0) {
            res.status(200).send({ success: true, users: userArr });
        }
        else {
            const retrieveAllUsers = yield node_fetch_1.default(`https://reqres.in/api/users?page=1`).then(response => response.json());
            userArr = retrieveAllUsers.data;
            res.status(200).send({ success: true, users: retrieveAllUsers.data });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}));
app.delete("/deleteUserFromList/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        let removeUserFromArr = userArr.filter((userObj) => userObj.id !== Number(id));
        userArr = removeUserFromArr;
        res.status(200).send({ success: true, message: 'Successfully deleted user.' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}));
app.put("/editUserFromList/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let userBody = req.body;
    try {
        let indexOfUser = userArr.findIndex((userObj) => userObj.id === Number(id));
        userArr[indexOfUser] = userBody;
        res.status(200).send({ success: true, message: `Successfully edited a user.` });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}));
app.post("/addUserToList", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userBody = req.body;
    try {
        userArr = [userBody, ...userArr];
        res.status(200).send({ success: true, message: "Successfully added a user." });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Welcome to the API.');
}));
app.listen(8888, () => console.log("Server running..."));
