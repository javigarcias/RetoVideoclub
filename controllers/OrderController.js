const {
    Order,
    User,
    Film
} = require('../models');

const OrderController = {
    async getAll(req, res) {
        try {
            const orders = await Order.findAll ({
                attributes: {
                    exclude: ['UserId']
                },
                include:[{
                    model: Film,
                    attributes: ['title'],
                    through:{
                        attributes: []
                    }
                },{
                    model: User,
                    attributes: ['email']
                }]
            });
            res.send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the orders'
            })
        }
    }

}

module.exports = OrderController;