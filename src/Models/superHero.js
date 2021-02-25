const {Schema, model} = require('mongoose');

const schema = new Schema({
    realName: {type: String, required: true},
    description: {type: String, required: true},
    superPowers: {type: String, required: true},
    catchPhrases: {type: String, required: true},
    images: {type: Array, required: true},
    nickname: {type: String, required: true, unique: true},
})

module.exports = model('Heroes', schema)