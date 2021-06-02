import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { UserFilter } from "./UserFilter";
import { UserListItem } from "./UserListItem";

export default function UserDashboard() {
    const [listOfUsers, setListOfUsers] = useState([
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
            avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
    ]);

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
                        <UserListItem userObj={userObj} index={i} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
