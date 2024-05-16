import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    publishDate: {
        type: Number,
        required: true,
    }
},  { timestamps : true })

export const Book =  mongoose.model('mern-collection', bookSchema);
