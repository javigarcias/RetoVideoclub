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
    },
    async create(req,res){
        try {
            const returnDate = new Date();
            returnDate.setDate(returnDate.getDate() + 3)
            const order = await Order.create({
                status: 'Alquilada',
                returnDate,
                UserId: req.user.id
                });
                await order.addFilm(req.body.films);
                res.send ({
                    message: 'Added successfully in your order'
                }); 
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