import express, { Application, Request, Response } from "express";
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

app.get("/fetchAllUsers", async (req, res, next) => {
    try {

        if(userArr.length > 0) {
            res.status(200).send({ success: true, users: userArr });
        } else {
            const retrieveAllUsers = await fetch(`https://reqres.in/api/users?page=1`).then(response => response.json());
            userArr = retrieveAllUsers.data;
            
            res.status(200).send({ success: true, users: retrieveAllUsers.data })
    } 
        } catch(error) {
            res.send(400);
        }
});

app.delete("/deleteUserFromList/:id", async (req, res, next) => {
    let { id } = req.params;
    try {
        let removeUserFromArr = userArr.filter(userObj => userObj.id !== id);
        userArr = removeUserFromArr;
        res.status(200).send({ success: true, message: 'Successfully delete user from list.' });
    } catch (error) {
        res.send(400);
    }
})

app.put("/editUserFromList/:id", async (req, res, next) => {
    let { id } = req.params;
    let { first_name } = req.body;
    console.log(id, first_name, req.body);
})

app.get("/", async (req: Request, res: Response) => {
    res.send('Welcome to the API.');
});

app.listen(8888, () => console.log("Server running..."));
