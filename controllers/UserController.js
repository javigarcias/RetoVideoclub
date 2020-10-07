const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
    User
} = require('../models');

const UserController = {
    async signup(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }
            const token = jwt.sign({ id: user.id }, 'pericodelospalotes', { expiresIn: '15d' });
            console.log(token)
            user.token = token; 
            await user.save() 
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to login' })
        }

    },
    async delete(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Email does not exist'
                })
            }
            res.status(200).send({
                message: 'Email DELETED'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to deleted the user'
            })
        }
    },
}

module.exports = UserController;