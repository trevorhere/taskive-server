const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
       
    },
    lastName: {
        type: String
       
    },
    lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "List"
    }]

})


const User = mongoose.model("User", userSchema);
module.exports = User;