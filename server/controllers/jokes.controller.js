const {Joke} = require('../models/jokes.model');

module.exports = {
    createJoke:function (request, response) {
        const { setup, punchline } = request.body
        
        Joke.create({
            setup,
            punchline,
        })

        .then((jokes) => response.json(jokes))
        .catch((err) => response.json(err))
    },

    getAllJokes:function (request, response) {
        Joke.find({})
        .then((jokes) => response.json(jokes))
        .catch((err) => response.json(err))
    },

    getJoke:function (request, response) {
        Joke.findOne({ _id: request.params.joke_id })
        .then((joke) => response.json(joke))
        .catch((err) => response.json(err))
    },

    updateJoke:function (request, response) {
        Joke.findOneAndUpdate(
            { _id: request.params.joke_id }, 
            request.body, {
                new: true,
            })

        .then((updateJoke) => response.json(updateJoke))
        .catch((err) => response.json(err))
    },

    deleteJoke:function (request, response) {
        Joke.deleteOne({ _id: request.params.joke_id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err))
    }
}