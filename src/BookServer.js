const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Book = require('./Book');
const cors = require('cors');

const connectionString = "mongodb+srv://user123:123user123@cluster0.jvwxq.mongodb.net/bookcollection";
mongoose.connect(connectionString).then(() => {
    console.log("Server Connected!!");
    const app = express();
    
    app.use(bodyParser.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(cors({
        origin: 'http://localhost:3000'// Allow only your React app
    }));

    //GetAll
    app.get('/books', async (req, res) => {
        const ans = await Book.find();
        res.send(ans);
    });

    //GetByID
    app.get('/books/:id', async (req, res) => {
        const ans = await Book.findOne({ bookID: req.params.id });
        res.send(ans);
    });

    //Create
    app.post('/books', async (req, res) => {
        console.log(req.body);
        book = new Book({ ...req.body, bookID: parseInt(req.body.bookID) });
        const ans = await book.save();
        res.send(ans);
    });

    //Delete
    app.delete('/books/:id', async (req, res) => {
        const ans = await Book.deleteOne({ bookID: parseInt(req.params.id) });
        res.send(ans);
    });

    //Update
    app.patch('books/:id', async (req, res) => {
        await Book.updateOne({ bookID: req.params.id }, { ...req.body });
        res.send("updated succesfully !");
    });

    app.listen(4002, () => {
        console.log("Server Started..");
    })
});