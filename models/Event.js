const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    createdBy: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Event', Event);