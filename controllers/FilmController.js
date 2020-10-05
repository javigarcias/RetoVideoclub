const { Film, Sequelize} = require('../models');
const Op = Sequelize.Op;


const FilmController = {
    getAll(req, res) {
        Film.findAll()
            .then(films => res.send(films))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get film'
                })
            })
    },
    getById(req, res) {
        Film.findByPk(req.params.id)
            .then(film => res.send(film))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the film'
                })
            })
    },
    getByTitle(req, res) {
        Film.findAll({ 
                where: {
                    title: {
                        [Op.like]: `%${req.params.title}%`
                    }
                }
            })
            .then(film => res.send(film))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the film'
                })
            })
    }
}


module.exports = FilmController