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
    create(req,res){
        const returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 3)
        Order.create({
                status: 'Alquilada',
                returnDate,
                UserId: req.user.id
            })
            .then(order => {
                return order.addFilm(req.body.films); //añade en OrderMovies las movies con el OrderId
            })
            .then(() => res.send({
                message: 'Order successfully created!'
            }))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problema trying to create the order'
                })
            })
    }

}

module.exports = OrderController;