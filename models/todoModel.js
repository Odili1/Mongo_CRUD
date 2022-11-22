const { Schema, model } = require('mongoose');



const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true});


const todoModel = model('To-do', todoSchema);

module.exports = todoModel;
