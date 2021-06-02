import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Button,
} from "reactstrap";

export function UserFilter() {
    return (
        <Row>
            <Col className="d-flex justify-content-between">
                <InputGroup className="d-flex align-items-center">
                    <InputGroupAddon>
                        <InputGroupText className="h-100">
                            <FontAwesomeIcon size={"lg"} icon={faSearch} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Search Users..."
                        type="text"
                        // value={userFilter}
                        // onChange={(e) => setUserFilter(e.target.value)}
                    ></Input>
                </InputGroup>
                <Button
                    // onClick={addCommentGroup}
                    className="m-3 rounded-circle"
                    color="success"
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Col>
        </Row>
    );
}
