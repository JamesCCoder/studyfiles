
let users = [];

export const createUser = (req, res, next) =>{
    const user = req.body;
    users.push(user);
    res.send(`${user.firstName} added`);
}

export const getUser = (req, res, next) =>{
    res.send(users);
}

export const getOneUser = (req, res, next) =>{
    const {firstName} = req.params;
    const myUser = users.find((user) => user.firstName === firstName);
    res.send(myUser);
}

export const deleteOneUser = (req, res, next) =>{
    const {firstName} = req.params;
    users = users.filter(user => user.firstName !== firstName);
    res.send(`${firstName} deleted`);
}