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
    let response = await fetch(`http://localhost:8888/editUserFromList/${userObj.id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(userObj)
       }).then((response) => response.json());
    if(response.success) {
        return response.message;
    } else {
        throw new Error(response.message);
    }
}

export const addUserToList = async (userObj) => {
    let response = await fetch(`http://localhost:8888/addUserToList/`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(userObj)
       }).then((response) => response.json());
    if(response.success) {
        return response.message;
    } else {
        throw new Error(response.message);
    }
}