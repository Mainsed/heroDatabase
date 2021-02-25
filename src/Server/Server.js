const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json({extended: true}))

app.use('/api/superhero', require('./superHeroRoutes'));

const start = async () => {
    try {
        mongoose.connect(
            'mongodb+srv://Mainsed:qwerty1234@superheroes.xmns3.mongodb.net/SuperHeroes?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
        app.listen(5000, () => {
            console.log('Server started!')
        });
    } catch (e) {
        console.log('Error: ' + e.message)
    }
}
start();