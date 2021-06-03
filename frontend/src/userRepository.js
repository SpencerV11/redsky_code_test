export const fetchAllUsers = async () => {
    let response = await fetch("http://localhost:8888/fetchAllUsers/").then((response) => response.json());
    if(response.success) {
        return response.users;
    } else {
        throw new Error(response.error);
    }
}

export const deleteUserFromList = async (id) => {
    let response = await fetch(`http://localhost:8888/deleteUserFromList/${id}`, { method: 'DELETE' }).then((response) => response.json());
    if(response.success) {
        return response.message;
    } else {
        throw new Error(response.message);
    }
}

export const editUserFromList = async (userObj) => {
    console.log('hit here', userObj);
    let response = await fetch(`http://localhost:8888/editUserFromList/${userObj.id}`, { method: 'PUT', body: { user: userObj } }).then((response) => response.json());
    console.log(response);
}