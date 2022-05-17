const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === "james"){
        req.user = {name: "james"};
        next();
    }else{
        res.status(401).send("unauthorized");
    }
}

module.exports = authorize;