const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    bookID: Number,
    bookName:String,
    authorName:String,
    bookImage:String,
    price: Number
});
module.exports = mongoose.model('Book',userSchema);