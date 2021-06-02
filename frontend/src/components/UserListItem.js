import React, { useState } from "react";
import { Col, Input, Label, ListGroupItem, Row } from "reactstrap";
import { faSave, faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

export function UserListItem({ userObj, index }) {
    const [editUserToggle, setEditUserToggle] = useState(false);
    const [tempUserObj, setTempUserObj] = useState(userObj);

    return (
        <ListGroupItem className="mt-1 rounded d-flex justify-content-between align-items-center">
            {editUserToggle ? (
                <Row className="d-flex justify-content-between w-100">
                    <Col className="my-1" xm={12} sm={12} md={6} lg={3} xl={3}>
                        <Label>First Name</Label>
                        <Input value={tempUserObj.first_name} />
                    </Col>
                    <Col className="my-1" xm={12} sm={12} md={6} lg={3} xl={3}>
                        <Label>Last Name</Label>
                        <Input value={tempUserObj.last_name} />
                    </Col>
                    <Col className="my-1" xm={12} sm={12} md={12} lg={3} xl={3}>
                        <Label>Email</Label>
                        <Input value={tempUserObj.email} />
                    </Col>
                    <Col
                        sm={12}
                        md={12}
                        lg={2}
                        xl={2}
                        className="d-flex justify-content-end align-items-center my-4"
                    >
                        <FontAwesomeIcon
                            className="icon colorRed"
                            size={"lg"}
                            icon={faTrashAlt}
                        />
                        <FontAwesomeIcon
                            onClick={() => setEditUserToggle(!editUserToggle)}
                            className="icon colorGreen"
                            size={"lg"}
                            icon={faSave}
                        />
                    </Col>
                </Row>
            ) : (
                <Row className=" my-1 d-flex justify-content-between w-100">
                    <Col xs={12} sm={12} md={6}>
                        <div className="d-flex flex-xs-column">
                            <img
                                className="avatarIcon"
                                src={tempUserObj.avatar}
                                alt="User Icon"
                            />
                            <div>
                                <h5>
                                    {tempUserObj.first_name}{" "}
                                    {tempUserObj.last_name}
                                </h5>
                                <h6 className="font-weight-light">
                                    {tempUserObj.email}
                                </h6>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={3}
                        className="d-flex justify-content-end align-items-center"
                    >
                        <FontAwesomeIcon
                            onClick={() => setEditUserToggle(!editUserToggle)}
                            className="icon colorGray"
                            size={"lg"}
                            icon={faUserEdit}
                        />
                    </Col>
                </Row>
            )}
        </ListGroupItem>
    );
}
