const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    }
});



module.exports = mongoose.model('users', UserSchema);