import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, } from "reactstrap";
import { addUserToList, editUserFromList, fetchAllUsers } from "../userRepository";
import { UserListItem } from "./UserListItem";
import { deleteUserFromList } from "../userRepository";
import { NewUser } from "../objectContructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function UserDashboard() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        handleFetchUsers();
    }, []);
    
    const handleFetchUsers = async () => {
        let fetchedUsers = await fetchAllUsers();
        setListOfUsers(fetchedUsers);
    };

    const handleDeleteUser = async (id) => {
        let deleteMsg = await deleteUserFromList(id);
        let updatedListOfUsers = listOfUsers.filter(userObj => userObj.id !== id);
        setListOfUsers(updatedListOfUsers);
        toast(deleteMsg);
    }

    const handleEditUser = async (userObj) => {
        let editMsg = await editUserFromList(userObj);
        toast(editMsg);
    }

    const handleAddUser = async (userObj) => {
        let addUserMsg = await addUserToList(userObj);
        setListOfUsers([userObj, ...listOfUsers])
        toast(addUserMsg);
    }

    return (
        <Container className="mt-5 p-5">
            <Row>
                <Col>
                    <h1>Manage Users</h1>
                </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-end">
                <Button
                    onClick={() => handleAddUser(new NewUser())}
                    className="m-3 rounded-circle"
                    color="success"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Col>
        </Row>
            <Row>
                <Col>
                    {listOfUsers.map((userObj, i) => (
                        <UserListItem handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser} key={i} userObj={userObj} index={i} listOfUsers={listOfUsers} />
                    ))}
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
}
