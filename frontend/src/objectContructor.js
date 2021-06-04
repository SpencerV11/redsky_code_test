import shortid from "shortid"

function NewUser(first_name = '', last_name = '', email = '', id = shortid.generate(), avatar = '') {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.id = id;
    this.avatar = avatar;
}

export { NewUser };