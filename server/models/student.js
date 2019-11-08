const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    studies: {type:String, required:true},
    phone: [{
        id: String,
        value: String,
        required: false  
    }]
});

module.exports = mongoose.model('Student', StudentSchema);