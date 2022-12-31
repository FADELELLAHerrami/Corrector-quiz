const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    nom: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,  
    }
});


module.exports = mongoose.model('UserModel', UserSchema);