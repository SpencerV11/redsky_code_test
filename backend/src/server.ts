import express, { Application, NextFunction, Request, Response } from "express";
import fetch from "node-fetch";
import userRoutes from "../src/routes/userRoutes";
import cors from "cors";

const app: Application = express();
let userArr = [];

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// If this were a bigger project I would create a routes & controllers folder to separate endpoints.
// app.use("/users", userRoutes);

interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

app.get("/fetchAllUsers", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (userArr.length > 0) {
            res.status(200).send({ success: true, users: userArr });
        } else {
            const retrieveAllUsers: { data: User[] } = await fetch(`https://reqres.in/api/users?page=1`).then(response => response.json());
            userArr = retrieveAllUsers.data;
            
            res.status(200).send({ success: true, users: retrieveAllUsers.data })
    } 
        } catch(error) {
            res.status(500).json({ success: false, message: error.message });
        }
});

app.delete("/deleteUserFromList/:id", async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.params;
    try {
        let removeUserFromArr: User[] = userArr.filter((userObj: User) => userObj.id !== Number(id));
        userArr = removeUserFromArr;
        res.status(200).send({ success: true, message: 'Successfully deleted user.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.put("/editUserFromList/:id", async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.params;
    let userBody = req.body;
    try {
        let indexOfUser = userArr.findIndex((userObj: User) => userObj.id === Number(id));
        userArr[indexOfUser] = userBody;
        res.status(200).send({ success: true, message: `Successfully edited a user.`});
    } catch(error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.post("/addUserToList", async (req: Request, res: Response, next: NextFunction) => {
    let userBody = req.body;
    try {
        userArr = [userBody, ...userArr];
        res.status(200).send({ success: true, message: "Successfully added a user." });
    } catch(error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.get("/", async (req: Request, res: Response) => {
    res.send('Welcome to the API.');
});

app.listen(8888, () => console.log("Server running..."));
