import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { editUserFromList, fetchAllUsers } from "../userRepository";
import { UserFilter } from "./UserFilter";
import { UserListItem } from "./UserListItem";
import { deleteUserFromList } from "../userRepository";

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
        // Handle Toast
        console.log(deleteMsg);
    }

    const handleEditUser = async (userObj) => {
        let editMsg = await editUserFromList(userObj);
        console.log(editMsg);
        // Handle Toast
    }

    return (
        <Container className="mt-5 p-5">
            <Row>
                <Col>
                    <h1>Manage Users</h1>
                </Col>
            </Row>
            <UserFilter />
            <Row>
                <Col>
                    {listOfUsers.map((userObj, i) => (
                        <UserListItem handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser} key={i} userObj={userObj} index={i} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
