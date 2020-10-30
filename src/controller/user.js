const User = require('../model/user')

const userContainer = [];

const fetchUsers = (req, res, next) => {
    res.status(200).json({
        message: 'OK',
        data: userContainer.slice()
    })
}

const addUser = (req, res, next) => {
    const name = req.body.data.name
    const age = req.body.data.age

    const user = new User(name, age)

    userContainer.push(user)

    res.status(201).json({
        message: "Created",
        data: userContainer.slice()
    })

}

module.exports = {addUser, fetchUsers}