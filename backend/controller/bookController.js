import { Book } from '../models/bookModel.js';

// get ALL
const get_all_books = async (req, res) => {
   try {
        const allBooks = await Book.find({})
        return res.status(200).json({ count : allBooks.length, data: allBooks})
   } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
   }
}
// get ONE
const get_book = async (req, res) => {
    try {
         const book = await Book.findById(req.params.id)
         return res.status(200).json(book)
    } catch (error) {
         console.log(error)
         res.status(500).send({ message: error.message })
    }
 }

// post (create) ONE
const create_book = async(req, res) => {
    try {
        if ( !req.body.title || !req.body.author || 
            !req.body.description || !req.body.publishYear  ){
            res.status(400).send('Send the following fields: title, author, publishYear, description')
        }
        const newBook = {
            title: req.body.title, author: req.body.author,
            description: req.body.description, publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
}

// delete ONE
const delete_book = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book){
            return res.status(404).send({message: 'Book cannot be found'})
        }
        return res.status(200).send({message: 'Book has been deleted'})
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
 }

 // put (modify) ONE
const modify_book = async (req, res) => {
    try {
         if ( !req.body.title || !req.body.author || 
            !req.body.description || !req.body.publishYear  ){
            return res.status(400).send('Send the following field: title, author, publishYear, description')
         }
         const book = await Book.findByIdAndUpdate(req.params.id, req.body)
         if (!book){
            return res.status(404).json({message: 'Book cannot be found'})
         }

         return res.status(200).send({message: 'Book has been Updated'})
    } catch (error) {
         console.log(error)
         res.status(500).send({ message: error.message })
    }
 }
 const modify_field = async (req, res) => {
    try {
        const updateFields = req.body;
 
        if (!updateFields || Object.keys(updateFields).length === 0) { 
            return res.status(400).send({ message: 'Provide at least one field to update'})
        }
 
        const result = await Book.findByIdAndUpdate(req.params.id, updateFields, { new: true });
        if (!result) {
                return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).send({ message: 'Book updated successfully', book: result });
   } 
    catch (error) {
           console.log(error);
           res.status(500).send({ message: error.message });
   }
 }

export { create_book, get_all_books,
         get_book, delete_book, 
         modify_book, modify_field};